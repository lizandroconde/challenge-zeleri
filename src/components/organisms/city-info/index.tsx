import { useState,useEffect} from "react"
import { AiOutlineHeart } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { Badge, Button, Text } from "@nextui-org/react"
import { gettemperatureColor,verifyLocalStorage,saveLocalStorage,deleteLocalStorage,convertTemperatureToCelsius } from "@helpers";
import { Weather } from "@interfaces";

export const CityInfo = (data:Weather) =>{
    const [isSaved , setIsSaved] = useState(false)
    const  { id,sys: { country }, name, main: { temp }} = data

    const temperature = convertTemperatureToCelsius(temp)
    const badgeColor = gettemperatureColor(Number(temperature))
    
    
    const handleVerifySave = () =>{
        setIsSaved(verifyLocalStorage(id))
    }
    useEffect(()=>{
        handleVerifySave()
    },[])
     
    
    return(
        <>
            <Text h1 color="white" css={{textAlign:"center",justifyContent:"center",display:"flex", alignItems:"center"}}>
                 <Badge css={{background:badgeColor,color:"white",letterSpacing:"1px"}} >
                    {temperature} C°
                 </Badge>
                 {name}, {country} &nbsp;
                 {isSaved ? <Button color="gradient" iconRight={<GoHeart size={"1.2rem"} color="red"  />} onClick={()=>{deleteLocalStorage(id),handleVerifySave()}}>Quitar de Favoritos</Button> :  <Button color="gradient" iconRight={<AiOutlineHeart size={"1.2rem"} />} onClick={()=>{saveLocalStorage(data),handleVerifySave()}}> Agregar a Favoritos</Button>}
            </Text>
        </>
    )
}