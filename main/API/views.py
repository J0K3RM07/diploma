from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *
from main.MCHS.models import *

class PlaceholderViewSet(viewsets.ModelViewSet):
    queryset = Placeholder.objects.all()
    
