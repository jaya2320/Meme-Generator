from api.models import Memes
from rest_framework import serializers

class MemeSerializer(serializers.ModelSerializer):
    def get_image(self, obj):
        try:
            request = self.context.get('request')
            return request.scheme + '://' + request.META['HTTP_HOST'] + obj.image.url 
        except:
            return None

    image = serializers.SerializerMethodField()
    class Meta:
        model=Memes
        fields=[
            'top_text',
            'bottom_text',
            'image'
        ]

class MemePostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Memes
        fields=[
            'top_text',
            'bottom_text',
            'image'
        ]