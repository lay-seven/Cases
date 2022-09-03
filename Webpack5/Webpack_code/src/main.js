import count from './js/count';
import sum from './js/sum';
// 想让webpack打包资源，必须引入
import './css/index.css';
import "./less/index.less"

console.log(count(9, 7));
console.log(sum(9,7));