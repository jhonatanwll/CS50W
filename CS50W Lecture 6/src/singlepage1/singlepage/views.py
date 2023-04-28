from django.http import Http404, HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
 return render(request, "singlepage/index.html")

texts = ["Texto 1", "Texto 2", "Texto 3"]

def section(request, num):
  if 1 <= num <= 3:
    return HttpResponse(texts[num -1])
  else:
    raise Http404("No such section")