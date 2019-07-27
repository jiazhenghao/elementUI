// function showMessage(message) {
//     let invoiceNum = '99';
//     console.log(message);
// }
// let invoiceNum = '1350';
// showMessage(`Invoice Number: ${invoiceNum}`);//Invoice Number: 1350

function processInvoice(segments, ...values) {
    console.log(segments);
    console.log(values);
}
let invoiceNum = '1350';
let amout = '2000';
processInvoice(`Invoice: ${invoiceNum} for ${amout}`);
//Invoice: 1350 for 2000
//[]
processInvoice `Invoice: ${invoiceNum} for ${amout}`;
// [ 'Invoice: ', ' for ', '' ]
// [ '1350', '2000' ]