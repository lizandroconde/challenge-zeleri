import { Weather } from "@interfaces"

export const saveLocalStorage = (citie:Weather) =>{
    const localData:any = localStorage.getItem("cities")
    const data = JSON.parse(localData) || []
    data.push(citie)
     localStorage.setItem("cities",JSON.stringify(data))
}

export const deleteLocalStorage = (id:number) =>{
    const localData:any = localStorage.getItem("cities")
    const data = JSON.parse(localData) || []
    const cities = data.filter((item:Weather) => item.id !== id);
     localStorage.setItem("cities",JSON.stringify(cities))
}

export const verifyLocalStorage = (id:number) =>{
    const localData:any = localStorage.getItem("cities")
    const data = JSON.parse(localData) || []
    const citie = data.find((item:Weather) => item.id === id)
    if(citie) return true
    return false
}

export const allLocalStorage = () =>{
    const localData:any = localStorage.getItem("cities")
    return JSON.parse(localData) || []
   
}