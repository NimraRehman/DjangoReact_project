from django.contrib import admin
from django.urls import path, re_path
from to_do_list import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/tasks_list/$', views.tasks_list),
    re_path(r'^api/tasks_detail/([0-9]+)$', views.tasks_detail),
]