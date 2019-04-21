def decor(func):
    def wrap():
        print("==========")
        func()
        print("==========")
    return wrap

def print_text():
    print("Hello world!")

print_text = decor(print_text)
print_text()

#another way to define decorators
def decor2(func):
    def wrap():
        print("==========")
        func()
        print("==========")
    return wrap

@decor2
def print_text2():
    print("Hello world!")

print_text2()