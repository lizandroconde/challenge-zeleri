const images:{[index:string]:string} = {
    "01d":"https://acegif.com/wp-content/uploads/gifs/sun-63.gif",
    "02d":"https://i.gifer.com/NlRN.gif",
    "03d":"https://maldita.es/uploads/images/2022/04/626aff6a89586nubes-jpg.jpg",
    "04d":"https://imagenes.diariodenavarra.es/files/article_amp/uploads/2020/11/25/60b05a4a1c774.jpeg",
    "09d":"http://acidcow.com/pics/20091224/gif_01.gif",
    "10d":"https://i.pinimg.com/originals/59/8f/ae/598faedb156576303a9d3d2be642b20e.gif",
    "11d":"https://userscontent2.emaze.com/images/9fe7edc7-773f-4bb0-bd22-12bc4033b24f/cff41f4d-1570-4d91-bf91-4efbeee15324.gif",
    "13d":"https://i.gifer.com/origin/03/035f61e9d0fc56469f76719ba7b2e1af.gif",
    "01n":"https://conceptodefinicion.de/wp-content/uploads/2017/02/Noche2.jpg ",
    "02n":"https://st2.depositphotos.com/4404267/6487/i/450/depositphotos_64872759-stock-photo-full-moon-in-night-sky.jpg",
    "03n":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFgTAAuNymx8f0oFp2dMOiSVSGXt_JkpfqFBC1st2sa7-JyzIbArMj_NNByRnTRw8drpQ&usqp=CAU",
    "04n":"https://www.laopinion.com.co/sites/default/files/2021-09/FARO%20CATATUMBO%20%281%29%201.jpg",
    "09n":"https://elsoldeiquique.cl/wp-content/uploads/2016/04/llovizna.gif",
    "10n":"https://c.tenor.com/KnRHNwnmhOsAAAAC/bajo-la-lluvia.gif",
    "11n":"https://c.tenor.com/z8h0TlzSQMYAAAAC/trueno-truenos.gif",
    "13n":"https://i.gifer.com/origin/03/035f61e9d0fc56469f76719ba7b2e1af.gif"
}
export const WatherType = (type:string) =>{
    return images[type]|| images["01d"]
}