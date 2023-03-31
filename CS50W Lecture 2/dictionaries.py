Meanings = {"water":"Learn how to Love", "earth":"Learn how to Manifest your Potential", "fire":"Learn how to Act Justly", "air":"Learn how to Comprehend"}
boolean = False;
Meanings["ether"] = "The fifth element, needed for Ascension!"
Meanings["ether"] = "The fifth element!"

n = input("Write an element pls: ")
for i in Meanings:
	if n == i:
		boolean = True;
		print(f"The element {i} means: {Meanings[i]}")	
if boolean == False:
	print("Please start over again an write one of the following elements: ")
	for ii in Meanings:
		print(ii)
