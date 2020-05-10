from django.urls import path
from . import views
app_name = 'app'
urlpatterns = [
    path('', views.index, name = 'index'),
    path('projekt1/', views.projekt1, name='projekt1'),
    path('projekt2/', views.projekt2, name='projekt2'),
]