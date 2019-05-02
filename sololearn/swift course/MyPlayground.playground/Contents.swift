import UIKit

var str = "Hello, playground"

//fallthrough
let myInt = 5
var desc = "The number \(myInt) is "
switch myInt {
case 2,3,5,7,11,13,17,19:
    desc += "a prime number, and also "
    fallthrough
default:
    desc += "an integer."
}
print (desc)

//empty string
var emptyString = ""
var anotherEmptyString = String()
if emptyString.isEmpty {
    print("It's an empty string.xs")
}

//string interpolation
let mult = 4
let message = "\(mult) times 1.5 is \(Double(mult) * 1.5)"
print (message)

//characters count in a string
let someString = "I am learning with SoloLearn"
print("someString has \(someString.count) chars.")

//comparing strings
let s1 = "We are alike"
let s2 = "We are alike"
if s1 == s1 {
    print("s1 equals s2")
}
print(s1.hasPrefix("We are"))
print(s1.hasSuffix("like"))

//creating an empty int array
var someInts = [Int]()
//array
var fourDoubles = [Double](repeating: 1.0, count: 4)
var shoppingList: [String] = ["Brea", "Milk"]
var newShoppingList = ["Brea", "Milk"]
//modifying an Array
//append()  +=  insert  remove  removeLast()
shoppingList.append("Banana")
shoppingList.append("Watermelon")
print(shoppingList)
shoppingList[1...3] = ["pineapple", "orange"]
print(shoppingList)
//iterating over an array
for item in shoppingList {
    print(item)
}
for (index, value) in shoppingList.enumerated() {
    print("Item \(index + 1): \(value)")
}

//Set
var letters = Set<Character>()
var names: Set<String> = ["David", "Susan", "Robert"]
var newNames: Set = ["David", "Susan", "Robert"]
//count isEmpty insert remove removeAll contains
if names.contains("James") {
    print("James is in")
}
else {
    print("James is not in")
}
//for-in loop   sorted
for name in names.sorted() {
    print("\(name)")
}
//Set Operations
//a.intersection(b) a.symmetricDifference(b) a.union(b) a.subtract(b)
//is equal ==  isSubset isSuperset isStrictSubset isDisjoint

//dictionaries
var airports = [Int: String]()
var airports2: [String: String] = ["TOR": "Toronto", "NY": "New York", "PVG": "Shanghai"]
var airportsInShort = ["TOR": "Toronto", "NY": "New York", "PVG": "Shanghai"]
//count isEmpty
airportsInShort["LHR"] = "London"
//updateValue returns the old value
let oldValueAirports = airportsInShort.updateValue("New York City", forKey: "NY")
//If the value for the requested key does not exist, returns a value of nil
//subscript syntax 下标语法
airportsInShort["TOR"] = nil
//removeValue
for (airportCode, airportName) in airportsInShort {
    print("\(airportCode): \(airportName)")
}
var count = 1
for airportCode in airportsInShort.keys {
    print("We now have \(count): \(airportCode)")
    count+=1
}
//the same with .values
//for (airportName) in airportsInShort.values {
//    print("\(airportName)")
//}

//loop
for x in 1...4 {
    print("\(x) a loop displayed")
}

//function
func sayHello(personName: String) -> String {
    let greeting = "Hello, " + personName + "!"
    return greeting
}
print(sayHello(personName: "Jarsper"))
func rangeLength(start: Int, end: Int) -> Int {
    return end - start
}
print(rangeLength(start: 2, end: 7))
//functions without a defined return type still returns a special value of type Void.

func minMax(array: [Int]) -> (min:Int, max:Int) {
    var currMin = array[0]
    var currMax = array[0]
    for v in array[1..<array.count] {
        if v < currMin {
            currMin = v
        }
        if v > currMax {
            currMax = v
        }
    }
    return (currMin, currMax)
}
let bounds = minMax(array: [4, 1, 3, 2, -1, -2, -3, 9])
print("\(bounds.min) is min and max is \(bounds.max)")

//external parameter names
func myMultiple(a n1:Int, b n2:Int) -> Int {
    return n1 * n2
}
print(myMultiple(a: 11, b: 10))

//default parameter values
func someFunction(p1: Int = 12) {
    print("the value is \(p1)")
}
someFunction()

//variadic parameters
func arithmeticMean(numbers: Double...) -> Double {
    var total: Double = 0;
    for i in numbers {
        total += i
    }
    return (total / Double(numbers.count))
}
print(arithmeticMean(numbers: 5.0, 2.0, 3.0, 7))
//默认参数 在前， 可变长在后

//要改变传入函数的变量的值，用inout 关键字
func swapInts(a: inout Int, b: inout Int) {
    let tempA = a
    a = b
    b = tempA
}
var someInt = 3
var anotherInt = 9
swapInts(a: &someInt, b: &anotherInt)
print("someInt is now \(someInt), while anotherInt is now \(anotherInt)")

//Function Types
func addInts(a: Int, b: Int) -> Int {
    return a + b
}
var mathFuncAdd: (Int, Int) -> Int = addInts
print(mathFuncAdd(2,3))
//Function Types as parameter types
func printResult(mathFunc: (Int, Int) -> Int, a: Int, b: Int) {
    print("Result: \(mathFunc(a, b))")
}
printResult(mathFunc: mathFuncAdd, a: 10, b: 21)
//Function Types as Return Types
func plus(input: Int) -> Int {
    return input + 1
}
func minus(input: Int) -> Int {
    return input - 1
}
func chooseFunc(flag: Bool) -> (Int) -> Int {
    if (flag) {
        return plus
    }
    else {
        return minus
    }
}
var f = chooseFunc(flag: false)
print(f(44))

