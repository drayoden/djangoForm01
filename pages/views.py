from django.shortcuts import render
from django.http import HttpResponse
import json

def index(request):
    return render(request, 'pages/index.html')

def about(request):
    return render(request, 'pages/about.html')

def contact(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        print(data['email'])
        print(data['msg'])
    return HttpResponse("Hello")
    
    #if request.method == 'POST': 
    