from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.utils.translation import gettext_lazy as _
from datetime import datetime

class Patient(models.Model):
    patient_code = models.AutoField(
        primary_key=True,
        verbose_name='Código do paciente',
    )

    name = models.CharField(
        max_length=100,
        verbose_name='Nome do paciente',
        default='',
    )

    age = models.IntegerField(
        verbose_name='Idade do paciente',
        blank=True,
        default=0,
    )

    GENDER = (
        ('M', 'Masculino'),
        ('F', 'Feminino'),
    )

    sex = models.CharField(
        max_length=1,
        choices=GENDER,
        verbose_name='Sexo do paciente',
    )

    TT4 = models.FloatField(
        verbose_name='TT4',
        default=0.0,
    )

    FTI = models.FloatField(
        verbose_name='FTI',
        default=0.0,
    )

    T3 = models.FloatField(
        verbose_name='T3',
        default=0.0,
    )

    TSH = models.FloatField(
        verbose_name='TSH',
        default=0.0,
    )

    T4U = models.FloatField(
        verbose_name='T4U',
        default=0.0,
    )

    service_date = models.DateField(
        verbose_name='Data do atendimento',
        default=datetime.now,
    )

    positive = models.BooleanField(
        verbose_name='Tireoidismo',
        default=False,
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Paciente'
        verbose_name_plural = 'Pacientes'
        ordering = ['name']

# class User(AbstractUser):
#     pass

#     def __str__(self):
#         return self.username