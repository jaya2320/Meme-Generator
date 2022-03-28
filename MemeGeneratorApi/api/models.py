from pickle import TRUE
from django.db import models

# Create your models here.
class Memes(models.Model):
    image = models.ImageField(upload_to='memes', blank=True, null=True, default=None)
    top_text = models.TextField(max_length=500,blank=True, null=True)
    bottom_text = models.TextField(max_length=500,blank=True, null=True)
