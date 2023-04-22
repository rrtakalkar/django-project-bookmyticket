from django.contrib.auth.models import User, Group
from rest_framework import serializers

from bookmyticketapi.models import Customer
from bookmyticketapi.models import Country, State, City
from bookmyticketapi.models import Cinema, Screen
from bookmyticketapi.models import Genre, Movie, MovieShow, MovieBooking


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = ['url', 'mobile', 'name', 'email', 'created']

class ConuntrySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Country
        fields = ['url', 'id', 'name', 'created']

class StateSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = State
        fields = ['url', 'id', 'name', 'country', 'created']

class CitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = City
        fields = ['url', 'id', 'name', 'state', 'created']

class CountryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id','name']

class StateModelSerializer(serializers.ModelSerializer):
    country = CountryModelSerializer(read_only=True)
    country_id = serializers.SlugRelatedField(queryset=Country.objects.all(), slug_field='id', write_only=True)
    class Meta:
        model = State
        fields = '__all__'

class CityModelSerializer(serializers.ModelSerializer):
    state = StateModelSerializer(read_only=True)
    state_id = serializers.SlugRelatedField(queryset=State.objects.all(), slug_field='id', write_only=True)
    class Meta:
        model = City
        fields = '__all__'


class CinemaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cinema
        fields = ['url', 'id', 'name', 'address', 'city', 'created']

class ScreenSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Screen
        fields = ['url', 'number', 'cinema', 'royal_no_of_seats', 'club_no_of_seats', 'executive_no_of_seats', 'created']

class GenreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Genre
        fields = ['url', 'name', 'created']
    
class MovieSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Movie
        fields = ['url', 'id', 'title', 'description', 'director', 'released_date', 'movie_genres', 'released_screens', 'created']

class MovieShowSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MovieShow
        fields = ['url', 'movie', 'screen', 'show_date', 'show_time','royal_no_of_seats','club_no_of_seats','executive_no_of_seats', 'created']

class MovieBookingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MovieBooking
        fields = ['url', 'customer', 'movie_show', 'royal_no_of_seats', 'club_no_of_seats', 'executive_no_of_seats']


class CustomerSerializerSample(serializers.Serializer):
    mobile = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True, allow_blank=False, max_length=255)
    email = serializers.EmailField(required=True, allow_blank=False)

    def create(self, validated_data):
        """
        Create and return a new `Customer` instance, given the validated data.
        """
        return Customer.objects.create(validated_data)

    def update(self, instance, validated_data):
        """
        Update customer object
        """
        instance.name = validated_data.get("name", instance.name)
        instance.email = validated_data.get("email", instance.email)
        instance.save()
        return instance
