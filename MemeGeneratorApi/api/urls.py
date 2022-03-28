from django.urls import path
from . import views
urlpatterns = [
    path('getMemes/',views.MemeAPI.as_view()),
    path('postMemes/',views.MemeAPI.as_view())
]
