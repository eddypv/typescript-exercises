import express  from 'express';
import { bmiCalculator } from './bmi';
import { exerciseCalculator, ResultExercise} from './exercise';

interface ResponseBMI{
    weight:number,
    height:number,
    bmi:string
}

const app = express();
app.get('/hello-word', (_req, res) => {
  res.send('Hello Full Stack!');
});
app.use(express.json());
app.get('/bmi', (req, res)=>{
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);
    if(weight && height){
        const bmi:string = bmiCalculator(height, weight);
        const response:ResponseBMI = {
            weight,height, bmi
        };
        return res.send(response);
    }else{
        return res.send({"error":"malformatted parameters"});
    }    
});
app.post('/exercises/', (req, res)=>{
    /* eslint-disable @typescript-eslint/no-unsafe-member-access , @typescript-eslint/no-unsafe-assignment */
    const dailyExercises = req.body.daily_exercises;
    const target = req.body.target;
    /* eslint-enable @typescript-eslint/no-unsafe-member-access , @typescript-eslint/no-unsafe-assignment */
    
    if(target && dailyExercises){
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const response: ResultExercise = exerciseCalculator(target, dailyExercises);
        return res.send(response)   ;
    }else{
        return res.send({"error":"parameters missing"});
    }
    

});
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});