n = int(input("Write a Month's Number: "))


if n > 0 and n < 7:
	print("This Month is before July")
elif n>7 and n<13:
	print("This Month is after June")
else:
	print("This Month does not appear in the calendar")