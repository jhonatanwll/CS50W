from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "hello/index.html")

def jhonatan(request):
    return HttpResponse("Hello Jhonatan!")

def sueli(request):
    return HttpResponse("Hello Sueli!")

def greet(request, name):
    return HttpResponse(f"Hello, {name.capitalize()}")