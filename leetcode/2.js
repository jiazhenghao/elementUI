function reverseAndCapitalise(sentenceIn) {
  if (sentenceIn == "") return "";
  var strRes = "";
  var arr = sentenceIn.split(" ");

  strRes += reverseSingle(arr[arr.length - 1]);
  for (let j = arr.length - 2; j >= 0; j--) {
    let k = reverseSingle(arr[j]);
    if (k[0] == "." || k[0] == "?" || k[0] == "," || k[0] == "!") {
      strRes += k[0];
      strRes += " ";
      strRes += k.slice(1);
    } else {
      strRes += " ";
      strRes += k;
    }
  }
  return strRes;

  function reverseSingle(sentence) {
    let res = "";
    let capital = true;
    let length = sentence.length;

    for (let i = length - 1; i >= 0; i--) {
      if (capital) {
        if (sentence.charCodeAt(i) >= 97 && sentence.charCodeAt(i) <= 122) {
          res += sentence[i].toUpperCase();
          capital = false;
        } else if (
          sentence.charCodeAt(i) >= 65 &&
          sentence.charCodeAt(i) <= 90
        ) {
          res += sentence[i].toUpperCase();
          capital = false;
        } else {
          res += sentence[i];
        }
      } else {
        if (sentence.charCodeAt(i) >= 65 && sentence.charCodeAt(i) <= 90) {
          res += sentence[i].toLowerCase();
        } else {
          res += sentence[i];
        }
      }
    }
    return res;
  }
}
//console.log(reverseAndCapitalise("Hey there, Alan"));
