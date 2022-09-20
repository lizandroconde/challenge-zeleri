import { Badge, Button, Card, Grid, Link, Text } from "@nextui-org/react"
import Image from "next/image";
import { useRouter } from "next/router";
import { BiInfoCircle, BiMapAlt } from "react-icons/bi";
import { convertTemperatureToCelsius } from "../../../helpers/convert-to-celsius";
import { gettemperatureColor } from "../../../helpers/temperature-color";
import { WatherType } from "../../../helpers/wather-type"
import { Weather } from "../../../interfaces";

export const WeatherCard = ({ id, sys: { country }, name, main: { temp }, weather, coord:{lat,lon} }:Weather) => {
    const router = useRouter()
    const temperatureCelsius = convertTemperatureToCelsius(temp);
    const temperatureColor = gettemperatureColor(Number(temperatureCelsius))

    const handleGoToMap = () =>{
        window.open(`https://openweathermap.org/weathermap?zoom=12&lat=${lat}&lon=${lon}/`,"_blank")
    }
    const handleGoToDetails = () =>{
        router.push(`/city/${id}/`)
    }

    return (
        <Card css={{ mw: "500px", my: "$7", background: `url(${WatherType(weather[0].icon || "01d")})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <Card.Header css={{ backdropFilter: "saturate(100%) blur(2px)", p: "$6" }} >
                <img
                    alt="nextui logo"
                    src={`https://openweathermap.org/images/flags/${country.toLocaleLowerCase()}.png`}
                    width="30px"
                    height="20px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={8}>
                        <Text h4 color="white" >
                            {name}, {country}
                        </Text>
                    </Grid>
                    <Grid xs={4}>
                        <Button onClick={handleGoToDetails} iconRight={<BiInfoCircle />} css={{ margin: "auto" }} size="xs" shadow color="gradient" auto >
                            Mas Detalles
                        </Button>
                    </Grid>

                    <Grid xs={8}>
                        <Text css={{ color: "$accents8" }}> <Badge style={{ background: temperatureColor }} size="md">
                            {temperatureCelsius} °С
                        </Badge></Text>
                    </Grid>
                    <Grid xs={4}>
                        <Button iconRight={<BiMapAlt />} onClick={handleGoToMap} css={{ margin: "auto" }} size="xs" shadow color="gradient" auto >
                            Ver Mapa
                        </Button>
                    </Grid>
                </Grid.Container>
            </Card.Header>
        </Card>
    )
}