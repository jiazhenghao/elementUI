var growler = new Vue({
    el: "#growler",
    data: {
        appName: "Growler"//POJO plain old JavaScript Object
    }
});

/*
    data property:
    at design time, represents the schema
    at runtime, serves as the model
*/

/*
    data property caveat [ˈkæviæt]:警告;
    You can only modify properties
    You can't add properties at runtime
    You can't remove properties at runtime
*/

/*
    data property values:
    primitive values:
    123, "abc", "2017-02-14", [1,2,3]
    no native objects:
    Number, String, Date, Array
*/