var cat = {
    name: { first: 'fluttd', lastName: 'jia' },
    color: 'WHite'
};

Object.defineProperty(cat, 'fullName', {
    get: function () {
        return this.name.first + ' ' + this.name.lastName;
    },
    set: function (value) {
        var parts = value.split(' ');
        this.name.first = parts[0];
        this.name.last = parts[1];
    },
    enumerable: true
});

//console.log(cat.fullName);

for (const key in cat) {
    if (cat.hasOwnProperty(key)) {
        console.log(key, cat[key]);
    }
}

console.log(cat);