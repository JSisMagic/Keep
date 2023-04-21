import { info } from './logger.js';

const fun = function (number, fn) {
  if (number >= 10) {
    fn(number);
  } else {
    console.log('Number is smaller than 10');
  }
};

fun(11, info);