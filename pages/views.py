from django.shortcuts import render

def index(request):
    return render(request, 'pages/index.html')

def page1(request):
    return render(request, 'pages/page1.html')
