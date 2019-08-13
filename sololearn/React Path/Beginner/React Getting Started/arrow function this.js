const outer = () => {
    this.name = 'outer';
    const obj = {
        name: 1,
        b: ()=>{
            console.log(this.name); //outer
        }
    }
    obj.b();
    var obj2 = {
        name: 1,
        b: function() {
            console.log(this.name); //1
        }
    }
    obj2.b();
};
outer();
