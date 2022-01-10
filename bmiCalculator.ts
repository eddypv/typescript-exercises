import getParams from './params';
import {bmiCalculator} from './bmi'
const params = getParams(process.argv)

console.log(bmiCalculator(Number(params[0]), Number(params[1])))