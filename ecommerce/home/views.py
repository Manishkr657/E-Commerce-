from django.shortcuts import render
from home.models import SignupUser
from home.models import LoginUser
from home.models import PaymentData
from django.contrib.auth.hashers import make_password, check_password

# Create your views here.



def index(request):
    return render(request, 'home/ecommerce.html')

def login(request):
    if request.method == "POST":
        un =request.POST.get('name')
        p1 =request.POST.get('psw1')    
    
        user_exist = SignupUser.objects.filter(username=un).exists()
        if user_exist:
            user = SignupUser.objects.get(username=un)
            store_pwd = user.password
            chkpwd = check_password(p1, store_pwd )
            if chkpwd:
                context = {'msg': f'Welcome {un} !'}
                return render(request,'home/ecommerce.html',context)
            else:
                context ={'msg':'Wrong username or password'}
                return render(request,'home/login.html',context)
        else:
            context = {'msg': f'user {un} does not exit !'}
            return render(request, 'home/signup.html', context)
        
    else:
        return render(request,'home/login.html',{'title':'home'})



def signup(request):
    if request.method == "POST":
        un =request.POST.get('name')
        em =request.POST.get('email')
        pn =request.POST.get('pno')
        Ad =request.POST.get('Address')
        p1 =request.POST.get('psw1')    
        p2 =request.POST.get('psw2')

        user_exist = SignupUser.objects.filter(username=un)
        if user_exist:
            context = {'msg':'user already exist'}
            return render(request,'home/signup.html',context)
        else:
            # print("++++>>")
            data = SignupUser(
                username = un,
                email =em,
                phone_number =pn,
                Address=Ad,
                password= make_password(p1),
                reenter_password=make_password(p2))
            data.save()
            context ={'msg':'user REgistered Successfully'}
            return render(request,'home/login.html',context)
        
    else:
         return render(request,'home/signup.html',{'title':'signup'})

def forget(request):
    return render(request,'home/forget.html',{'title':'forget'})
def payment(request):
    if request.method == "POST":
        fname =request.POST.get('fname')
        email =request.POST.get('email')
        Ad =request.POST.get('Ad')
        ct =request.POST.get('ct')
       
        zc =request.POST.get('zc')
        cd =request.POST.get('cd')
        em =request.POST.get('em')
        
        cv =request.POST.get('cv')

        user_exist = PaymentData.objects.filter(fullname = fname)
        if user_exist:
            context = {'msg':'User already exist'}
            return render(request,'home/payment.html',context)
        
        
        else:
            # print("++++>>")
            data = PaymentData(
                fullname = fname,
                email = email,
                Address= Ad,
                city = ct,
                
                zip_code = zc,
                card_no= make_password(cd),
                exp_month=em,
                
                cvv = cv)
            
            data.save()
            context ={'msg':'Payment Successfully'}
            return render(request,'home/ecommerce.html',context)
    else:
        return render(request,'home/payment.html',{'title':'payment'})
    
def shoes(request):
    return render(request,'home/shoes.html',{'title':'shoes'})
def hoodies(request):
    return render(request,'home/hoodies.html',{'title':'hoodies'})
def jeans(request):
    return render(request,'home/jeans.html',{'title':'jeans'})
def watch(request):
    return render(request,'home/watch.html',{'title':'watch'})
def smartphone(request):
    return render(request,'home/smartphone.html',{'title':'smartphone'})
def television(request):
    return render(request,'home/television.html',{'title':'television'})
def TShirt(request):
    return render(request,'home/TShirt.html',{'title':'TShirt'})
def dinnerset(request):
    return render(request,'home/dinnerset.html',{'title':'dinnerset'})
def blankets(request):
    return render(request,'home/blankets.html',{'title':'blankets'})
def laptop(request):
    return render(request,'home/laptop.html',{'title':'laptop'})
def microwave(request):
    return render(request,'home/microwave.html',{'title':'microwave'})
def coffeemaker(request):
    return render(request,'home/coffeemaker.html',{'title':'coffeemaker'})
def bed(request):
    return render(request,'home/bed.html',{'title':'bed'})
def Airconditioner(request):
    return render(request,'home/Airconditioner.html',{'title':'signup'})
def book(request):
    return render(request,'home/book.html',{'title':'book'})
def bag(request):
    return render(request,'home/bag.html',{'title':'bag'})
def sarees(request):
    return render(request,'home/sarees.html',{'title':'sarees'})
def washingmachine(request):
    return render(request,'home/washingmachine.html',{'title':'washingmachine'})
def addtocart(request):
    return render(request,'home/addtocart.html',{'title':'addtocart'})
def contact(request):
    return render(request,'home/contact.html',{'title':'contact'})



    
