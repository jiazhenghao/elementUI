var t = {
    tableId: 99
};
let {proxy, revoke} = Proxy.revocable(t, {
    get: function(target, prop, receiver) {
        return Reflect.get(target, prop, receiver) + 100;
    }
});
//console.log(proxy.tableId);//199
revoke();
console.log(proxy.tableId);
//TypeError: Cannot perform 'get' on a proxy that has been revoked