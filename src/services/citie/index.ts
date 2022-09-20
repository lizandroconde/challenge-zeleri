import fetch from "axios"

export const getCitieWeather = (query:string) =>{
    return fetch(`${process.env.NEXT_PUBLIC_OPENWEATHERMAP_ENDPOINT}/data/2.5/find?q=${query}&type=like&sort=population&cnt=10&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`,{
        method: 'GET'
      }).then((data)=>{return {status: 200,data:data.data.list}}).catch(() => {return{data:[],status:404}});
}
export const getCitieIdWeather = (id:string) =>{
  return fetch(`${process.env.NEXT_PUBLIC_OPENWEATHERMAP_ENDPOINT}/data/2.5/weather?id=${id}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`,{
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
}