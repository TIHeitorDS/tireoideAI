# Generated by Django 3.2.25 on 2024-10-20 22:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('patient_code', models.AutoField(primary_key=True, serialize=False, verbose_name='Código do paciente')),
                ('name', models.CharField(default='', max_length=100, verbose_name='Nome do paciente')),
                ('age', models.IntegerField(blank=True, default=0, verbose_name='Idade do paciente')),
                ('sex', models.CharField(choices=[('M', 'Masculino'), ('F', 'Feminino')], max_length=1, verbose_name='Sexo do paciente')),
                ('TT4', models.FloatField(default=0.0, verbose_name='TT4')),
                ('FTI', models.FloatField(default=0.0, verbose_name='FTI')),
                ('T3', models.FloatField(default=0.0, verbose_name='T3')),
                ('TSH', models.FloatField(default=0.0, verbose_name='TSH')),
                ('T4U', models.FloatField(default=0.0, verbose_name='T4U')),
                ('service_date', models.DateField(default=datetime.datetime.now, verbose_name='Data do atendimento')),
                ('positive', models.BooleanField(default=False, verbose_name='Tireoidismo')),
            ],
            options={
                'verbose_name': 'Paciente',
                'verbose_name_plural': 'Pacientes',
                'ordering': ['name'],
            },
        ),
    ]