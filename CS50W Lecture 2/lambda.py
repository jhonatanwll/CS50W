people = [
	{"name": "Jhonatan", "element":"Air"}, {"name":"Everton", "element":"Earth"}, {"name":"João","element":"Earth"}, {"name":"Sueli","element":"Air"}
]

people.sort(key=lambda person: person["element"])

print(people)


#def f(person):
#	return person["element"]
#people.sort(key=f)

