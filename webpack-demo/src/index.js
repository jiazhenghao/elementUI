import _ from 'lodash';
import * as math from "../src/math";

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  console.log(`2p = + ${math.sum(math.pi, math.pi)}`);

  return element;
}

document.body.appendChild(component());