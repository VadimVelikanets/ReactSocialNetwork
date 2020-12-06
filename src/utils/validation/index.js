export const requiredField = value =>{
    if(value) return undefined;
    return "Field is required"
}



export const maxLenghtCreator = maxLength => (value)=>{
    if(value && value.length > maxLength) return `Max lenght is ${maxLength} symbols`;
    return undefined
}