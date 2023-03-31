# Create an empty set
s= set()

# Add elements to the set
s.add(1)
s.add(2)
s.add(3)
s.add(4)
s.add(6)
s.add(1)
print(f"Added some values to the set 's': {s}")
print(f"The number of elements is currently: {len(s)}")

s.remove(6)
print(f"Removed the value '6' from the set: {s}")
print(f"The number of elements in the end is: {len(s)}")
