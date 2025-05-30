# backend/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .models import Tournament, Team, Match
from .serializers import TournamentSerializer, TeamSerializer, MatchSerializer

class LoginView(APIView):
    def post(self, request):
        return Response({"message": "Logged in"}, status=status.HTTP_200_OK)

class RegisterView(APIView):
    def post(self, request):
        return Response({"message": "Registered"}, status=status.HTTP_201_CREATED)

class TournamentViewSet(viewsets.ModelViewSet):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer