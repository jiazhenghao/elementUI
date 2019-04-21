/**
 * Q4
 * fill in the blanks to print "Sololearn" letter by letter
 */
const solo = ['S','o','l','o'];
const learn = ['l','e','a','r','n'];
const sololearn = [...solo, ...learn];
for (const i of sololearn) {
    console.log(i);
    document.write(i);
}
