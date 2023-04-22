from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from bookmyticketapi.serializers import UserSerializer, GroupSerializer

from bookmyticketapi.models import Customer
from bookmyticketapi.models import Country, State, City
from bookmyticketapi.models import Cinema, Screen
from bookmyticketapi.models import Genre, Movie, MovieShow, MovieBooking

from bookmyticketapi.serializers import CustomerSerializer
from bookmyticketapi.serializers import ConuntrySerializer, StateSerializer, CitySerializer, StateModelSerializer, CityModelSerializer
from bookmyticketapi.serializers import CinemaSerializer, ScreenSerializer
from bookmyticketapi.serializers import GenreSerializer, MovieSerializer, MovieShowSerializer, MovieBookingSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class CustomerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows customers to be viewed or edited
    """
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

class CountryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows country to be viewed or edited
    """
    queryset = Country.objects.all()
    serializer_class = ConuntrySerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

class StateViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows state to be viewed or edited
    """
    queryset = State.objects.all()
    serializer_class = StateSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

class CityViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows city to be viewed or edited
    """
    queryset = City.objects.all()
    serializer_class = CitySerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

class CinemaViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows cinema to be viewed or edited
    """
    queryset = Cinema.objects.all()
    serializer_class = CinemaSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

class ScreenViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows screen to be viewed or edited
    """
    queryset = Screen.objects.all()
    serializer_class = ScreenSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

class GenreViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows genre to be viewed or edited
    """
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

class MovieViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows movie to be viewed or edited
    """
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

class ScreenViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows screen to be viewed or edited
    """
    queryset = Screen.objects.all()
    serializer_class = ScreenSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

class MovieShowViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows movie show to be viewed or edited
    """
    queryset = MovieShow.objects.all()
    serializer_class = MovieShowSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

class MovieBookingViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows movie booking to be viewed or edited
    """
    queryset = MovieBooking.objects.all()
    serializer_class = MovieBookingSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

class StateModelViewSet(viewsets.ModelViewSet):
    """
    """
    queryset = State.objects.all()
    serializer_class = StateModelSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

class CityModelViewSet(viewsets.ModelViewSet):
    """
    """
    queryset = City.objects.all()
    serializer_class = CityModelSerializer
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]