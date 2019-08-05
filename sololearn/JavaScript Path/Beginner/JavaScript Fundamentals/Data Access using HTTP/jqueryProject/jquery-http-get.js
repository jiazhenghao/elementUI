import $ from 'jquery';
// $.get("http://myid.mockapi.io/api/v1/users", data => console.log('data: ', data));
let promise = $.get("http://myid.mockapi.io/api/v1/users");
promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
);
