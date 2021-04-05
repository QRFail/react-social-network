
export const required = (value) =>{
    if(value != undefined && value.length >0){
        return undefined
    }

    return "Required"
}

export const maxLengthCreator = (len) => (value) =>{
    if(value != undefined && value.length < len){
        return undefined
    }

    return "Max length " + len
}