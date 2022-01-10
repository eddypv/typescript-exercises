import getParams from './params';
interface bmiCategory  {
    category:string, 
    bmi_ini:number,
    bmi_end:number
}
const categories: Array<bmiCategory> =[
    {category:'Underweight (Severe thinness)', bmi_ini:0, bmi_end:15.0},
    {category:'Underweight (Moderate thinness)', bmi_ini:16.0, bmi_end:16.9},
    {category:'Underweight (Mild thinness)', bmi_ini:17.0, bmi_end:18.4},
    {category:'Normal range', bmi_ini:18.5, bmi_end:24.9},
    {category:'Overweight (Pre-obese)', bmi_ini:25.0, bmi_end:29.9},
    {category:'Obese (Class I)', bmi_ini:30.0, bmi_end:34.9},
    {category:'Obese (Class II)', bmi_ini:35.0, bmi_end:39.9},
    {category:'Obese (Class III)', bmi_ini:40.0, bmi_end:9999999.0},
] 
export const bmiCalculator = (heigth:number, weight:number) :string => {
    if(heigth > 0 && weight > 0){
        const heigth_cm = heigth / 100;
        const bmi = (weight /(heigth_cm*heigth_cm));
        const result = categories.find((element:bmiCategory)=>{
            if(element.bmi_ini<= bmi && element.bmi_end>= bmi){
                return true;
            }else{
                return false;
            }
        })
        //console.log(bmi)
        //console.log(result)
        if(result)
            return result.category
        else 
            return 'Not found BMI'
    }else{
        return 'heigth or weight must be greater than zero '
    }
    

}
const params = getParams(process.argv)

console.log(bmiCalculator(Number(params[0]), Number(params[1])))