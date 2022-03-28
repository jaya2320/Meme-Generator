from api.models import Memes
from rest_framework import serializers

class MemeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Memes
        fields="__all__"