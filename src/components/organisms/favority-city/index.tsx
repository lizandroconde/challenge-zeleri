import { useEffect, useState} from "react"
import { Container, Grid, Text } from "@nextui-org/react"
import { GoHeart } from "react-icons/go";
import { allLocalStorage } from "@helpers"
import { WeatherCard } from "@molecules"
import { Weather } from "@interfaces";

export const FavoritieCities = () =>{
    const [data,setData] = useState([])
    useEffect(() =>{
        setData(allLocalStorage())
    },[])

    return(
       <Container lg>
        <Text h3 color="white"> Ciudades Favoritos <GoHeart size={"1.2rem"} color="red"  /> </Text>
             <Grid.Container gap={3}>
                {data.map((item:Weather,index:number)=>{
                     return (
                        <Grid key={index}><WeatherCard  {...item} /></Grid>
                     )
                })}
            </Grid.Container>
       </Container>
    )
}