from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django import forms
import json
from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = '__all__'

def index(request):
    return render(request, 'pages/index.html')

def about(request):
    return render(request, 'pages/about.html')

def contact(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        print(data)
        print(data['email'])
        print(data['msg'])

        form = ContactForm(data)
        print(form)
        if form.is_valid():
            form.save()
         
    #return HttpResponse("Hello")
    return JsonResponse(data)
    
    #if request.method == 'POST': 
    