//arrow function doesn't care who calls it.
//By contrast, regular function cares a lot!

// "this" here is "exports"
this.id = 'exports';
const testerObj = {
    func1: function () {
        console.log('func1', this);
    },

    func2: () => {
        console.log('func2', this);
    },
};
testerObj.func1();//func1 { func1: [Function: func1], func2: [Function: func2] }
testerObj.func2();//func2 { id: 'exports' }

