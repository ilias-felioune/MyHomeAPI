

function getResponseType( response :string, data?:Record<string,any> | null, error?:Error){
    if(error){
        const obj = {response,error}
        return obj
    }
    else{
        const obj = {response,data}
        return obj
    }
}

export {getResponseType}
