const getParams = (args :Array<string>) :Array<string>=>{
    const params = args.filter((element:string, index:number)=>{
        return index >=2
    })
    return params
}
export default getParams;