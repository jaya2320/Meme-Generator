from django.urls import path
from . import views
urlpatterns = [
    path('getMemes/',views.MemeAPI.as_view()),
    path('postMemes/',views.MemePostApi.as_view())
]
