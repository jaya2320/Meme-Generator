from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from api.models import Memes
from .serializers import MemeSerializer,MemePostSerializer
from django.shortcuts import render

# Create your views here.
class MemeAPI(APIView):

    serializer_class=MemeSerializer

    def get(self, request):

        try:
            meme = Memes.objects.all()     
            serializer =MemeSerializer(meme,many=True,context={'request':request})
            return Response(serializer.data)
        except Exception as e:
            return Response({'error':str(e)}, status=status.HTTP_400_BAD_REQUEST)
            
class MemePostApi(APIView):
    serializer_class=MemePostSerializer
    def post(self,request):
        try:
            serializer=self.serializer_class(data=request.data)
            if serializer.is_valid() :
                image = serializer.validated_data.get('image')
                top_text = serializer.validated_data.get('top_text')
                bottom_text = serializer.validated_data.get('bottom_text')
                memes=Memes.objects.create(
                    image=image,
                    top_text=top_text,
                    bottom_text=bottom_text
                )
                memeser=MemeSerializer(memes,context={'request':request})
                return Response({'status': "Success","data":memeser.data}, status=status.HTTP_200_OK)
       
        except Exception as e:
         
            return Response({'status': str(e)}, status=status.HTTP_400_BAD_REQUEST)