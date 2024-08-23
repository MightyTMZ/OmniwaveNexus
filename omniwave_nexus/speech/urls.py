from django.urls import path
from . import views

urlpatterns = [
    path('documents/all/', views.SpeechDocumentList.as_view()),
]