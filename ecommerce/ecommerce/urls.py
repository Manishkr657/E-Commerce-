"""
URL configuration for ecommerce project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', views.index, name="home-ecommerce"),
    path('login/', views.login , name="home-login"),
    path('signup/',views.signup, name="home-signup"),
    path('forget/',views.forget, name="home-forget"),
    path('payment/',views.payment, name="home-payment"),
    path('shoes/',views.shoes, name="home-shoes"),
    path('hoodies/',views.hoodies, name="home-hoodies"),
    path('jeans/',views.jeans, name="home-jeans"),
    path('watch/',views.watch, name="home-watch"),
    path('smartphone/',views.smartphone, name="home-smartphone"),
    path('television/',views.television, name="home-television"),
    path('TShirt/',views.TShirt, name="home-TShirt"),
    path('dinnerset/',views.dinnerset, name="home-dinnerset"),
    path('blankets/',views.blankets, name="home-blankets"),
    path('laptop/',views.laptop, name="home-laptop"),
    path('microwave/',views.microwave, name="home-microwave"),
    path('coffeemaker/',views.coffeemaker, name="home-coffeemaker"),
    path('bed/',views.bed, name="home-bed"),
    path('Airconditioner/',views.Airconditioner, name="home-Airconditioner"),
    path('book/',views.book, name="home-book"),
    path('bag/',views.bag, name="home-bag"),
    path('sarees/',views.sarees, name="home-sarees"),
    path('washingmachine/',views.washingmachine, name="home-washingmachine"),
    path('addtocart/',views.addtocart, name="home-addtocart"),
    path('contact/',views.contact,name="home-contact"),
    

]
    
