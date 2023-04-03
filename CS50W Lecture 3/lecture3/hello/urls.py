from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("jhonatan", views.jhonatan, name="jhonatan"),
    path("sueli", views.sueli, name="sueli"),
    path("<str:name>", views.greet , name="greet"),
]