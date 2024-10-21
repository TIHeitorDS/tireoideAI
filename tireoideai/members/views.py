from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Patient
from .serializers import (
    ThyroidismInputSerializer,
    ThyroidismPatientSerializer,
    PatientSerializer
)
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
from datetime import datetime
import pandas as pd
import numpy as np
import joblib

class ThyroidismPrediction(APIView):
    def get(self, request):
        patient_code = request.query_params.get('patient_code', None)

        if not patient_code:
            return Response(
                {'detail': 'Código do paciente é obrigatório'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        data = {
            'patient_code': patient_code,
        }
        serializer = ThyroidismInputSerializer(data=data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        user_data = Patient.objects.filter(patient_code=patient_code).first()
        
        if not user_data:
            return Response({
                "error": "Dados do paciente não encontrados."
            }, status=status.HTTP_404_NOT_FOUND)
        
        model = joblib.load('model.sav')
        df_user_data = pd.DataFrame({
            'TT4': [user_data.TT4],
            'FTI': [user_data.FTI],
            'T3': [user_data.T3],
            'TSH': [user_data.TSH],
            'T4U': [user_data.T4U],
        })
        if df_user_data.isnull().values.any():
            return Response({
                "error": "Dados incompletos para o paciente."
            }, status=status.HTTP_400_BAD_REQUEST)
        
        prediction = model.predict(df_user_data)[0]

        if prediction == 1:
            user_data.positive = True
        else:
            user_data.positive = False
        user_data.save()
        
        result = {
            "Chance de ter tireoidismo": "ALTA" if prediction == 0 else "BAIXA",
        }
        
        return Response(result, status=status.HTTP_200_OK)

class PatientPredWithNoCadaster(APIView):
    def get(self, request):
        tt4 = request.query_params.get('TT4', None)
        fti = request.query_params.get('FTI', None)
        t3 = request.query_params.get('T3', None)
        tsh = request.query_params.get('TSH', None)
        t4u = request.query_params.get('T4U', None)

        if not tt4:
            return Response(
                {'detail': 'O campo TT4 é obrigatório'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        if not fti:
            return Response(
                {'detail': 'O campo FTI é obrigatório'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        if not t3:
            return Response(
                {'detail': 'O campo T3 é obrigatório'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        if not tsh:
            return Response(
                {'detail': 'O campo TSH é obrigatório'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        if not t4u:
            return Response(
                {'detail': 'O campo T4U é obrigatório'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        
        model = joblib.load('model.sav')
        df_user_data = pd.DataFrame({
            'TT4': [tt4],
            'FTI': [fti],
            'T3': [t3],
            'TSH': [tsh],
            'T4U': [t4u],
        })

        prediction = model.predict(df_user_data)[0]

        result = {
            "Chance de ter tireoidismo": "ALTA" if prediction == 0 else "BAIXA",
        }

        return Response(result, status=status.HTTP_200_OK)

def patient_list(request):
    patients = Patient.objects.all()
    quanity = len(patients)
    appointments_today = Patient.objects.filter(service_date=datetime.now())
    patients_with_tiroid = Patient.objects.filter(positive=True)
    serializer = ThyroidismPatientSerializer(patients, many=True)
    return JsonResponse(
        {'pacientes': serializer.data,
         'total_pacientes': quanity,
         'pacientes_com_hipo': len(patients_with_tiroid),
         'consultas_hoje': len(appointments_today),
        }
    )
    
@csrf_exempt
def patient_cadaster(request):
    if request.method == 'GET':
        name = request.GET.get('name')
        age = request.GET.get('age')
        sex = request.GET.get('sex')
        TT4 = request.GET.get('TT4').replace(',', '.')
        FTI = request.GET.get('FTI').replace(',', '.')
        T3 = request.GET.get('T3').replace(',', '.')
        TSH = request.GET.get('TSH').replace(',', '.')
        T4U = request.GET.get('T4U').replace(',', '.')

        patient_data = {
            'name': name,
            'age': age,
            'sex': sex,
            'TT4': TT4,
            'FTI': FTI,
            'T3': T3,
            'TSH': TSH,
            'T4U': T4U
        }

        serializer = PatientSerializer(data=patient_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    return JsonResponse({'error': 'Método não permitido'}, status=405)

@api_view(['GET', 'PUT', 'DELETE'])
def edit_petient(request, pk):
    try:
        patient = Patient.objects.get(pk=pk)
    except Patient.DoesNotExist:
        return JsonResponse({'error': 'Paciente não encontrado'}, status=404)

    if request.method == 'GET':
        serializer = PatientSerializer(patient)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PatientSerializer(patient, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        patient.delete()
        return JsonResponse({'message': 'Paciente deletado com sucesso!'}, status=204)
    return JsonResponse({'error': 'Método não permitido'}, status=405)

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        nome_completo = f"{user.first_name} {user.last_name}"
        return Response({
            'username': user.username,
            'nome': user.first_name,
            'sobrenome': user.last_name,
            'nome_completo': nome_completo,
        }, status=status.HTTP_200_OK)

# user = get_user_model()