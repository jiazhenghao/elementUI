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

//nested functions
func nestedExample(flag: Bool) -> (Int) -> Int {
    func plus(input: Int) -> Int {
        return input + 1
    }
    func minus(input: Int) -> Int {
        return input - 1
    }
    if (flag) {
        return plus
    }
    else {
        return minus
    }
}

//recursion
func factorial(n: Int) -> Int {
    return n == 0 ? 1 : n * factorial(n: n - 1)
}
print(factorial(n: 5))

//closures
//sorted method
func backwards(s1: String, s2: String) -> Bool {
    return s1 > s2
}
let names2 = ["Cc", "Aa", "Ee", "Bb", "Dd"]
var reversed = names2.sorted(by: backwards)
print(reversed)
let names3 = ["Cc", "Aa", "Ee", "Bb", "Dd"]
var reversed3 = names3.sorted(by: {(s1:String, s2:String) -> Bool in return s1 > s2})
print(reversed3)
//inferring typs from context, not recommended
var reversed4 = names3.sorted(by: {s1, s2 in return s1 > s2})
var reversed5 = names3.sorted(by: {s1, s2 in s1 > s2})
//shorthand argument names
var reversed6 = names3.sorted(by: {$0 > $1})
var reversed7 = names3.sorted(by: >)

//Tuples
//have values of any type means do not share a common type
let error = (404, "Not Found")
let (statusCode, statusMessage) = error
print("The code is \(statusCode)")
print("The message is \(error.1)")
let http200Status = (statusCode: 200, description: "OK")
//Tuples are particularly useful as the return values of the function, and
//are used as temporary groupings of related values.

//an enumeration
enum Compass {
    case North
    case South
    case East
    case West
}
enum Planet {
    case Mercury, Venus, Earth, Mars, Jupiter
}



//definition of class and structures
struct Resolution {
    var width = 0
    var height = 0
}
class VideoMode {
    var resolution = Resolution()
    var interlaced = false
    var frameRate = 0.0
}
let someRes = Resolution()
let someVid = VideoMode()
//all structures have an automatically-generated memberwise initializer, but class do not have
let vga = Resolution(width: 640, height: 480)

//Structures are value types
//in fact, in swift, integers, floating-point numbers, booleans, strings, arrays, and dictionaries
//are all value types
//the same is true of enumerations
let hd = Resolution(width: 1920, height: 1480)
var cinema = hd
cinema.width = 1024
print(cinema.width)
print(hd.width)
//classes are reference types

//lazy stored property
//only calculated till the first time it is used
//always var
class DataManager {
    lazy var importer = DataImporter()
    var data = [String]()
}
struct DataImporter {
    var data = [1, 2, 3]
}
//computed properties
struct Point {
    var x = 0.0, y = 0.0
}
struct Shape {
    var origin = Point()
    var center: Point {
        get {
            return Point(x: origin.x / 2, y: origin.y / 2)
        }
        set(newCenter) {
            origin.x = newCenter.x / 2
            origin.y = newCenter.y / 2
        }
    }
}
//property observers
class StepCounter {
    var totalSteps: Int = 0 {
        willSet(newSteps) {
            print("About to set totalSteps to \(newSteps)")
        }
        didSet {
            if totalSteps > oldValue {
                print("Added \(totalSteps - oldValue) steps")
            }
            else {
                print("Substracted \(oldValue - totalSteps) steps")
            }
        }
    }
}
let stepCounter = StepCounter()
stepCounter.totalSteps = 50
stepCounter.totalSteps = 150
stepCounter.totalSteps = 20
