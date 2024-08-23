from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView

from .models import *
from .serializers import *
from .permissions import *


class SpeechDocumentList(ListCreateAPIView):
    queryset = SpeechDocument.objects.all().order_by('-created_at')
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = SpeechDocumentSerializer

