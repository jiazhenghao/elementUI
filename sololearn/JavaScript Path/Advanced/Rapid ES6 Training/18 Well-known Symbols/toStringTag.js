let Blog = function() {
};
Blog.prototype[Symbol.toStringTag] = 'Blog Class';
let blog = new Blog();
console.log(blog.toString()); // [object Blog Class]

