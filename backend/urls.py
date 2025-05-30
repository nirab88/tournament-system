from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.tournament_api.api_urls')),  # assuming views are in tournament_api app
]
