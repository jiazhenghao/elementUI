/**
 * Q4
 * Removes elements from an array and, if necessary, 
 * inserts new elements in their place, 
 * returning the deleted elements.
@param start — The zero-based location in the array from which to start removing elements.
@param deleteCount — The number of elements to remove.
 */
rev = (str) => {
    let output = [...str].splice(1, 3).join("");
    console.log(output);
}
rev("mantis");//ant
