/*
    protected 
    public：可以被所有其他类所访问
    private：只能被自己访问和修改
    protected：自身、子类及同一个包中类可以访问
    default：同一包中的类可以访问，声明时没有加修饰符，认为是friendly。
    class Test {
        protected int x, y;
    }
    class Main {
        public static void main(String args[]) {
            Test t = new Test();
            System.out.print(t.x + t.y);
        }
    }
    //0
*/

/*
    runtime polymorphism: method overriding  重写 子类改写父类的方法。
    compile polymorphism: method overloading 重载 方法名一致，参数不一样。
*/

