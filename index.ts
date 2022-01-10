import express  from 'express'
import { bmiCalculator } from './bmiCalculator'

interface ResponseBMI{
    weight:number,
    height:number,
    bmi:string
}

const app = express();
app.get('/hello-word', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res)=>{
    const weight:number = Number(req.query.weight)
    const height:number = Number(req.query.height)
    if(weight && height){
        const bmi:string = bmiCalculator(height, weight)
        const response:ResponseBMI = {
            weight,height, bmi
        }
        return res.send(response)
    }else{
        return res.send({"error":"malformatted parameters"})
    }

    
})
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});