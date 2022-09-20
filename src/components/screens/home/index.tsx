import { HomeLayout } from "@layouts"
import { CitySearch, FavoritieCities } from "@organisms"

export const HomeScreen = () =>{
    return(
       <HomeLayout>
           <CitySearch/>
           <FavoritieCities/>
       </HomeLayout>
    )
}