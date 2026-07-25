# number = 112223334444444444
# temp = number
# listes = []
# while temp > 0:
#     count = 0
#     digit = temp % 10
#     number = number // 10
#     temp2 = number
#     if digit not in listes:
#         while temp2 > 0:
#             digit2 = temp2 % 10
#             if digit == digit2:
#                 if digit not in listes:
#                     listes.append(digit)
#                 count += 1
#             temp2 = temp2 // 10
#     if count > 0:
#         print(f"The digit {digit} is repeated {count + 1} times.")
#     temp = temp // 10
# print(f"Digits that are repeated: {listes}")

# n = 8
# for i in range(1, n + 1):
#         star = '* ' * i
#         space = ' ' * (n - i)
#         print(space + star, end=' ')
#         print()


def greet(name = "there", greet="Hello"):
    print(f"Hello, {name}! {greet}")
kumar = "Kumar"
greet(kumar)