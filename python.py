number = int(input("enter a two digit number: "))
number_string = str(number)
first_digit = int(number_string[0])
second_digit = int(number_string[1])
checking = number % first_digit == 0 and number % second_digit == 0 
print(checking)
if checking:
    print(number * 2)
else:
    print(number)
