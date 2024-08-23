from rest_framework import serializers
from users.serializers import SecureUserSerializer, UserSerializer
from .models import *


class CollaboratorSerializer(serializers.ModelSerializer):
    # During collaboration, people should know each other's emails and some sensitive info
    user = UserSerializer(many=True, read_only=True)
    
    class Meta:
        model = Collaborator
        fields = [
            'user', 
            'can_edit'
        ]


class SpeechDocumentSerializer(serializers.ModelSerializer):
    owner = SecureUserSerializer(read_only=True) # There is only one owner, thus many=True is not required
    collaborators = CollaboratorSerializer(many=True, read_only=True)
    class Meta:
        model = SpeechDocument
        fields = [
            'owner',
            'title', 
            'content', 
            'created_at', 
            'updated_at', 
            'collaborators',
            'is_public',
            'can_public_edit', 
        ]