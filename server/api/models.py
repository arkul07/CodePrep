from django.db import models
from django.db.models import JSONField

# Create your models here.
class Quiz(models.Model):
    topic = models.CharField(max_length=50)
    difficulty_level = models.CharField(max_length=50)
    # questions - models.JSONField()
