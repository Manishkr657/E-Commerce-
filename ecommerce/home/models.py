from django.db import models

# Create your models here.
class SignupUser(models.Model):
    username= models.CharField(max_length=35, unique=True)
    email =models.CharField(max_length=60)
    phone_number=models.CharField(max_length=10)
    Address=models.CharField(max_length=20)
    password=models.CharField(max_length=20)
    reenter_password=models.CharField(max_length=20)


    def __str__(self):
        return self.username
    
    
class LoginUser(models.Model):
    username = models.CharField(max_length=25, unique=True)
    password = models.CharField(max_length=20)
    
    def __str__(self):
        return self.username
    
class PaymentData(models.Model):
    fullname = models.CharField(max_length=40)
    email = models.EmailField(max_length=35)
    Address = models.CharField(max_length=60)
    city = models.CharField(max_length=20)
    
    zip_code = models.CharField(max_length=6)
    card_no = models.CharField(max_length=20,unique=True)
    exp_month = models.CharField(max_length=2)
    
    cvv = models.CharField(max_length=3)
    
    def __str__(self):
        return self.fullname