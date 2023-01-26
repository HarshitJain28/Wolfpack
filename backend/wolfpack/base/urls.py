from django.urls import path
from .views import RegisterView, image_generator
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenObtainPairView,
)
urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/',RegisterView.as_view(),name='register'),
    path('image-generator/',image_generator, name='image-generator')
]