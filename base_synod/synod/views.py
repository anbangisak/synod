from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    context = {"project_title": "synod"}
    return render(request, "synod/index.html", context)
