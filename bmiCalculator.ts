import getParams from './params';

const bmiCalculator = (heigth:number, weight:number) => {
    const bmi = (weight /(heigth*heigth))*703;
    console.log(bmi);
}
const params = getParams(process.argv)

bmiCalculator(Number(params[0]), Number(params[1]))