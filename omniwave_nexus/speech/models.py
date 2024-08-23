from django.db import models
from ckeditor.fields import RichTextField
from django.conf import settings
from users.models import CustomUser

# Model to represent a speech/document (similar to Google Docs)
class SpeechDocument(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='owned_speeches')
    title = models.CharField(max_length=255)
    content = RichTextField(blank=True, null=True)  # CKEditor for rich text editing
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    is_public = models.BooleanField(default=False)
    can_public_edit = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.title
    

class Collaborator(models.Model):
    document = models.ForeignKey(SpeechDocument, on_delete=models.CASCADE, related_name='collaborators')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    can_edit = models.BooleanField(default=True)

    def __str__(self) -> str:
        return f"{self.user.email} on {self.document.title}"