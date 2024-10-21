import re
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Patient
from django.contrib.auth import authenticate
from rest_framework.validators import UniqueValidator
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

User = get_user_model()

class ThyroidismInputSerializer(serializers.Serializer):
    patient_code = serializers.IntegerField()

class ThyroidismPatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'
    service_date = serializers.DateField(format='%d/%m/%Y')

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = [
            'patient_code',
            'name',
            'age',
            'sex',
            'patient_sick',
            'TT4',
            'FTI',
            'T3',
            'TSH',
            'T4U',
        ]
