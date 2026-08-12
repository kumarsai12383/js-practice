
# name = input("Enter your name: ")
# age = int(input("Enter your age: "))
# person = {
#     "name": name,
#     "age": age
# }
# arr = []
# arr.append(person)
# for i in arr:
#     print(i)
listed = ("apple", "banana", "cherry", "date", "elderberry")
listed[3] = "fig"  # This will raise an error because tuples are immutable
print("apple" in listed)  # Output: True