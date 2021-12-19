# models.py

from django.db import models

# Create your models here.
class Quotes(models.Model):
    name = models.CharField(max_length=30)  # name of author
    detail = models.CharField(max_length=500)  # quote
