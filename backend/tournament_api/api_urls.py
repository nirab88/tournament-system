from django.urls import path
from .views import RegisterView, LoginView
from rest_framework.routers import DefaultRouter
from .views import TournamentViewSet, TeamViewSet, MatchViewSet



router = DefaultRouter()
router.register(r'tournaments', TournamentViewSet)
router.register(r'teams', TeamViewSet)
router.register(r'matches', MatchViewSet)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]
