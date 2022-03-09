from django.urls import path
from . import views


urlpatterns = [
    path('', views.board_list),
    path('create/', views.board_list),
    path('<int:board_pk>/', views.board_detail),
    path('<int:board_pk>/delete/', views.board_detail),
    path('<int:board_pk>/update/', views.board_detail),
    path('<int:board_pk>/comment/create/', views.board_comment),
    path('<int:board_pk>/comment/<int:comment_pk>/delete/', views.board_comment),
    path('<int:board_pk>/comment/<int:comment_pk>/update/', views.board_comment),
]