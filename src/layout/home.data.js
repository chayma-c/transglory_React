const language = "french"
 const engdata={
    title:"Hello Word",
}
 const frdata={
    title:"Bonjour",
}
const mainData=()=>{
    if (language==="english") return (engdata) ;
    else if (language==="french") return frdata;
}
export default mainData;