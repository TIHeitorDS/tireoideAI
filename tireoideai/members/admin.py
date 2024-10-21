from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
# from .models import User
from .models import Patient

# admin.site.register(User, UserAdmin)
@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = (
        'patient_code',
        'name',
        )

# admin.site.register(Patient, PatientAdmin)