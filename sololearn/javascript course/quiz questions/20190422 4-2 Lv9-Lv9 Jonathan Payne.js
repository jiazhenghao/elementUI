/**
 * Q4
 */
Object.freeze(Object);//这个压根就没起作用
var obj = {
    property: "one"
};
//Object.freeze(obj);这个其实也没报错
obj.property = "two";
