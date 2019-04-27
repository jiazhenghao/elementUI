def greet(name = "")
    if name == ""
        puts "Greetings!"
    else 
        puts "Welcome, #{name}"
    end
end
#greet(gets.chomp)

#define methods that take any number of arguments using the following syntax
def someMethod(*p)
    puts p
end
someMethod(25, "hello", true)
#25
#hello
#true

