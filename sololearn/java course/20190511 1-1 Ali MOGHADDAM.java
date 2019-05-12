/*
    Q1:
    String a = "a";
    String b = "b";
    String c = a + b;
    String d = "ab";
    if (c == d) {
        System.out.println(1);
    }
    else {
        System.out.println(0);// 0
    }
 */

/*
    Q2:
    System.out.println(2 * (5 / 2));//4
 */

/*
    Q4:
    class A {}
    class B {
        static void m(A a1, A a2) {
            a1 = a2;
        }
    }
    public static void main(String[] args) {
        A a1 = new A();
        A a2 = new A();
        m(a1, a2);
        System.out.print(a1 == a2);
    }
    //false
*/

/*
    Q5:
    try {
        System.out.print("try");
        System.exit(0);
        throw new Exception();
    }
    catch (Exception e) {
        System.out.print("catch");
    }
    finally {
        System.out.print("finally");
    }
    //try
*/