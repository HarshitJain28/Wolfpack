from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from .serializers import UserSerializer
from django.http import JsonResponse
from PIL import Image, ImageOps
from rest_framework import generics
import os


class RegisterView(generics.CreateAPIView):
    def post(self,request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.create(validated_data=request.data)
            user.save()
            return JsonResponse({'status':'success'})
        return JsonResponse({'status':'error'})

@api_view(['POST'])
def image_generator(request):
    try:
        image = request.FILES.get('image')
        print(image)
        img = Image.open(image)
        img.thumbnail((200,300))
        image_list = ['thumbnail.jpg','medium.jpg','large.jpg','greyscale.jpg']
        for _image in image_list:
            file_path = f'D:/Work/Projects/Wolfpack/frontend/frontend/src/media/{_image}'
            if os.path.exists(file_path):
                os.remove(file_path)
        img.save('D:/Work/Projects/Wolfpack/frontend/frontend/src/media/thumbnail.jpg')
        medium = img.resize((500,500))
        medium.save('D:/Work/Projects/Wolfpack/frontend/frontend/src/media/medium.jpg')
        large = img.resize((1024,768))
        large.save('D:/Work/Projects/Wolfpack/frontend/frontend/src/media/large.jpg')
        greyscale = ImageOps.grayscale(medium)
        greyscale.save('D:/Work/Projects/Wolfpack/frontend/frontend/src/media/greyscale.jpg')
        return JsonResponse({'status':'success'})
    except Exception as e:
        print(e)
        return JsonResponse({'status':'error'})

