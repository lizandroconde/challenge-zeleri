 
import { CityScreen } from '@screens'
import { getCitieIdWeather } from '@services'
import { Weather } from '@interfaces'

const City = (props:{data:Weather}) => {
    
  return (
   <CityScreen {...props}/>
  )
}

export async function  getServerSideProps({query:{city}}:{query:{city:string}}) {
    const data =  await getCitieIdWeather(city) 
    if(data.status === 200){
      return {
        props: {
           data: data.data
        },
      };
    }
  
    
  }
export default City
