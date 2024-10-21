from django.urls import path
from .views import *
from django.contrib.auth import views as auth_views

urlpatterns = [
    path(
        'prediction/',
        ThyroidismPrediction.as_view(),
        name='thyroidism_prediction'
    ),
    path(
        'patient_withno_cadaster/',
         PatientPredWithNoCadaster.as_view(),
         name='thyroidism_prediction_withno_cadaster'
    ),
    path(
        'cadaster_patient/',
        patient_cadaster,
        name='cadaster_patient'
    ),
    path(
        'edit_patient/<int:pk>/',
        edit_petient,
        name='edit-patient'
    ),
    path(
        'patients/',
        patient_list,
        name='patients-list'
    ),
    path(
        'login/',
        LoginView.as_view(),
        name='login'
    )
]