import getParams from './params';
import { exerciseCalculator } from './exercise';


const params = getParams(process.argv);
if(params.length <2){
    throw new Error("Missing parameters");
}
let target =0;
const hours:Array<number> = params.filter((value:string, index:number)=>{
    if(index === 0){
        target = Number(value);
        return false;
    }else 
        return true;
}).map((value)=> Number(value) );

console.log(exerciseCalculator(target, hours));
