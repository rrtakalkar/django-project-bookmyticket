from django.db import models
from rest_framework import fields

# Create your models here.
class Customer(models.Model):
    mobile = models.fields.CharField(max_length=10, blank=False, unique=True)
    name = models.fields.CharField(max_length=255, blank=False)
    email = models.fields.EmailField(blank=False)
    created = models.fields.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['created']

class Country(models.Model):
    name = models.fields.CharField(max_length=255, blank=False, unique=True)
    created = models.fields.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['name']

class State(models.Model):
    name = models.fields.CharField(max_length=255, blank=False)
    country = models.ForeignKey(Country, on_delete=models.DO_NOTHING)
    created = models.fields.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['name']
        unique_together = ("name", "country")

class City(models.Model):
    name = models.fields.CharField(max_length=255, blank=False)
    state = models.ForeignKey(State, on_delete=models.DO_NOTHING)
    created = models.fields.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['name']
        unique_together = ("name", "state")

class Cinema(models.Model):
    name = models.fields.CharField(max_length=255, blank=False, unique=True)
    address = models.fields.TextField(max_length=255, blank=False)
    city = models.ForeignKey(City, blank=False, on_delete=models.DO_NOTHING)
    created = models.fields.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['city','name']

class Screen(models.Model):
    number = models.fields.CharField(max_length=2, blank=False)
    cinema = models.ForeignKey(Cinema, blank=False, on_delete=models.DO_NOTHING)
    royal_no_of_seats = models.fields.IntegerField(blank=False, default=20) 
    club_no_of_seats = models.fields.IntegerField(blank=False, default=40)
    executive_no_of_seats = models.fields.IntegerField(blank=False, default=50)
    created = models.fields.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['cinema','number']
        unique_together = ("number", "cinema")

class Genre(models.Model):
    name = models.fields.CharField(max_length=255, blank=False, unique=True)
    created = models.fields.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['name']

class Movie(models.Model):
    title = models.fields.CharField(max_length=255, blank=False, unique=True)
    description = models.fields.TextField(max_length=512, blank=False)
    director = models.fields.CharField(max_length=255, blank=False)
    released_date = models.DateField(blank=False)
    movie_genres = models.ManyToManyField(Genre, blank=False)
    released_screens = models.ManyToManyField(Screen, blank=False)
    created = models.fields.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['created','title']

class MovieShow(models.Model):
    movie = models.ForeignKey(Movie, blank=False, on_delete=models.DO_NOTHING)
    screen = models.ForeignKey(Screen, blank=False, on_delete=models.DO_NOTHING)
    show_date = models.fields.DateField(blank=False)
    show_time = models.fields.TimeField(blank=False)
    royal_no_of_seats = models.fields.IntegerField(blank=False, default=20) 
    club_no_of_seats = models.fields.IntegerField(blank=False, default=40)
    executive_no_of_seats = models.fields.IntegerField(blank=False, default=50)
    created = models.fields.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['created']

class MovieBooking(models.Model):
    customer = models.ForeignKey(Customer, blank=False, on_delete=models.DO_NOTHING)
    movie_show = models.ForeignKey(MovieShow, blank=False, on_delete=models.DO_NOTHING)
    royal_no_of_seats = models.fields.IntegerField(blank=False, default=0) 
    club_no_of_seats = models.fields.IntegerField(blank=False, default=0)
    executive_no_of_seats = models.fields.IntegerField(blank=False, default=0)
    created = models.fields.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['created']