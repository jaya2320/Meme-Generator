from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from api.models import Memes
from .serializers import MemeSerializer
from django.shortcuts import render

# Create your views here.
class MemeAPI(APIView):

    serializer_class=MemeSerializer

    def get(self, request):

        try:
            meme = Memes.objects.all()     
            serializer =MemeSerializer(meme,many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'error':str(e)}, status=status.HTTP_400_BAD_REQUEST)
    def post(self,request):
        try:
            serializer=self.serializer_class(data=request.data)
            if serializer.is_valid() :
                image = serializer.validated_data.get('image')
                top_text = serializer.validated_data.get('top_text')
                bottom_text = serializer.validated_data.get('bottom_text')
                Memes.objects.create(
                    image=image,
                    top_text=top_text,
                    bottom_text=bottom_text
                )
                return Response({'status': "Success"}, status=status.HTTP_200_OK)
       
        except Exception as e:
         
            return Response({'status': str(e)}, status=status.HTTP_400_BAD_REQUEST)