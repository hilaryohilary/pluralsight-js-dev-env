import './index.css';
import numeral from 'numeral';
import { debug } from 'webpack';
debug;
const courseValue = numeral(1000).format("$0,0.00");

console.log(`I would pay ${courseValue} for this awesome course!`);//eslint-disable-line no-console
