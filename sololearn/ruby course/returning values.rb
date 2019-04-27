=begin
    Even when you do not explicitly include a return,
    Ruby always returns the evaluated result of the last
    line of the method that is executed.
=end
def demo(a,b)
    a = b - 2
    b = a - 3
end
puts demo(5, 6)

#chaining methods
def square(x)
    x * x
end
square(2).times {puts "hi"}