
from django.contrib import admin
from home.models import SignupUser
from home.models import LoginUser
from home.models import PaymentData

admin.site.register(SignupUser)
admin.site.register(LoginUser)
admin.site.register(PaymentData)
