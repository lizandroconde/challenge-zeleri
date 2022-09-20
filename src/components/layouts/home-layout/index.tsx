import { Header } from "@organisms"

export const HomeLayout = ({children}:{children:React.ReactNode}) =>{
    return (
        <>
           <Header/> 
           {children}
        </>
    )
}