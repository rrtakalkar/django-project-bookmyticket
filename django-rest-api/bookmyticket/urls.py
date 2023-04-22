from django.urls import include, path
from rest_framework import routers
from bookmyticketapi import views

router = routers.DefaultRouter()
router.register(r'api/v1/users', views.UserViewSet)
router.register(r'api/v1/groups', views.GroupViewSet)
router.register(r'api/v1/customers', views.CustomerViewSet)
router.register(r'api/v1/countries', views.CountryViewSet)
router.register(r'api/v1/states', views.StateViewSet)
#router.register(r'api/v1/ui/states', views.StateModelViewSet)
router.register(r'api/v1/cities', views.CityViewSet)
#router.register(r'api/v1/ui/cities', views.CityModelViewSet)
router.register(r'api/v1/cinemas', views.CinemaViewSet)
router.register(r'api/v1/screens', views.ScreenViewSet)
router.register(r'api/v1/genres', views.GenreViewSet)
router.register(r'api/v1/movies', views.MovieViewSet)
router.register(r'api/v1/movie/shows', views.MovieShowViewSet)
router.register(r'api/v1/movie/bookings', views.MovieBookingViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]