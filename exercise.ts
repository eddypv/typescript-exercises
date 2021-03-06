export interface ResultExercise{
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}
interface Rating{
    rating: number,
    description:string
}
const ratings :Array<Rating>=[
    { rating:1, description:"Bad"},
    { rating:2, description:"Regular"},
    { rating:3, description:"Good"}
]
export const exerciseCalculator = (target:number, hours:Array<number>) :ResultExercise =>{
    const sumHours =hours.reduce((previous:number, current:number)=> previous + current ) 
    const sumHoursTarget = hours.length * target;
    const average = sumHours / hours.length;
    const trainingDays = hours.filter((value:number) =>value > 0 ).length;
    const targetDay = hours.map((value)=> value >= target).every((value) => value === true)
    const ratingId = Math.trunc((sumHours * 3) / sumHoursTarget)
    let rating:Rating 

    if(ratingId >= 1 && ratingId <= 3){
        rating = ratings[ratingId -1]
    }else if( ratingId >3){
        rating = ratings[2]
    }else {
        rating = ratings[0]
    }   
    const result: ResultExercise ={
        periodLength:hours.length,
        trainingDays,
        success:targetDay,
        rating:rating.rating,
        ratingDescription:rating.description,
        target,
        average
    }
    return result
}