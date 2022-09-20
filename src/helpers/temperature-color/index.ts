export const gettemperatureColor = (temperature:number) =>{
    if(temperature< 2) return "#1EA1E7";
    if(temperature< 5) return "#11AECA";
    if(temperature< 9) return "#3ADAA5";
    if(temperature< 14) return "#8FDA3A";
    if(temperature< 19) return "#D4DA70";
    if(temperature< 24) return "#D8BE2D";
    if(temperature< 26) return "#DE9B1D";
    if(temperature< 29) return "#FFB776";
    if(temperature< 24) return "#ED460C";
    if(temperature< 37) return "#F94405";
    if(temperature> 30) return "#F90523";
}