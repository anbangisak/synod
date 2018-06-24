import json

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


def index(request):
    context = {"project_title": "synod"}
    return render(request, "synod/index.html", context)


def ang_index(request):
    context = {"project_title": "synod-ang", "live": "in-progress"}
    return JsonResponse(context)
