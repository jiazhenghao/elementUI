function doAsync() {
    //return Promise.resolve('OK, Done');
    return Promise.reject(' Woops Wrong');
}
doAsync().then(value => console.log('success ' + value),
    value => console.log('failure' + value));
//success OK, Done
//failure Woops Wrong