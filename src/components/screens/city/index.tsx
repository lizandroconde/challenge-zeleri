import { Weather } from "@interfaces"
import { HomeLayout } from "@layouts"
import { CityInfo } from "@organisms"

export const CityScreen = (props:{data:Weather}) =>{
     
    return(
        <HomeLayout>
            <CityInfo {...props.data}/>
        </HomeLayout>
    )
}