def numbers(x):
    for i in range(x):
        if i % 2 == 0:
            yield i

print(list(numbers(11))) # [0, 2, 4, 6, 8, 10]