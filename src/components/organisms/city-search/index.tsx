import { useState, useEffect} from "react"
import {  Button, Card, Grid, Input, Loading, Modal } from "@nextui-org/react"
import { getCitieWeather } from "@services"
import {  WeatherCard } from "@molecules"
 
import { GoLocation, GoSearch } from "react-icons/go";

export const CitySearch = () => {

    const [modal, setModal] = useState(false)
    const [searchText, setSearchText] = useState(process.env.NEXT_PUBLIC_CITY||"")
    const [searching, setSearching] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [dataSearch, setDataSearch] = useState([])


    const handleChangeSearch = () => {
        setSearching(true)
        setIsSearch(true)
        getCitieWeather(searchText.toLocaleLowerCase().trim()).then((data) => {
            setSearching(false);
            (data.status === 200) ? setDataSearch(data.data) : setDataSearch([])
        })
    }

    useEffect(() =>{
        handleChangeSearch()
    },[])

    const buttonDisabled = searchText.length < 3

    return (
        <>
            <Button css={{ margin: "auto", mt: "$20" }} size="xl" color="gradient" bordered onClick={() => setModal(true)}>Buscar mi Ciudad..<GoLocation /></Button>
            <Modal closeButton
                onClose={() => setModal(false)}
                blur open={modal} width="500px" >
                <Modal.Body>
                    <Grid.Container gap={2}>
                        <Grid xs={8}>
                            <Input
                                clearable
                                bordered
                                fullWidth
                                color="primary"
                                size="lg"
                                placeholder="Buscar tu Ciudad..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </Grid>
                        <Grid xs={4}>
                            <Button iconRight={<GoSearch />} size="lg" shadow color="gradient" auto onClick={handleChangeSearch} disabled={buttonDisabled}>
                                Buscar
                            </Button>
                        </Grid>
                        <Grid xs={12}>

                            {searching ? <> <Loading type="points" />  Buscando... </>: <>
                                {isSearch && (
                                    <Card css={{ width: "100%", boxShadow: "none" }} >
                                        {dataSearch.length > 0 ? <>
                                            {
                                                dataSearch.map((item:any,index) => {
                                                    return (
                                                       <WeatherCard key={index} {...item} />
                                                    )
                                                })
                                            }
                                        </> : <>No Se encontro Resultados</>}
                                    </Card>
                                )}
                            </>}
                        </Grid>
                    </Grid.Container>
                </Modal.Body>
            </Modal>
        </>
    )
}