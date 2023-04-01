class Flight():
	def __init__(self, capacity):
		self.capacity = capacity
		self.passengers = []

	def add_passenger(self, name):
		if not self.open_seats():
			return False
		self.passengers.append(name) 
		return True
		
	def open_seats(self):
		return self.capacity - len(self.passengers)

flight = Flight(3)

people = ["Jhonatan", "Sueli", "Everton", "Joao"]
for person in people:
	flight.add_passenger(person)
	if flight.add_passenger(person):
		print(f"Add {person} to flight successfully!!")
	else:
		print(f"No more seats available for {person}")



