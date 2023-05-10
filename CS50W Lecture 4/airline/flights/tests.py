from django.db.models import Max
from django.test import TestCase

from .models import Airport, Flight, Passenger

# Create your tests here.
class FlightTestCase(TestCase):

 def setup(self):
  #Create airports.
  a1 = Airport.objects.create(code="AAA", city="City A")
  a2 = Airport.objects.create(code="BBB", city="City B")

  # Create fligths.
  Flight.objects.create(origin=a1, destination=a2, duration=100)
  Flight.objects.create(origin=a1, destination=a1, duration=200)
  Flight.objects.create(origin=a1, destination=a2, duration=-100)