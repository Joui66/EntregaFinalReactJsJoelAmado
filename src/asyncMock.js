const products = [
        {id: "1" , name: "Batman Año 1", description: "Comic de Batman. Escrito por Frank Miller. Editorial DC",  stock: "Disponibles: 10"  , price: "$4.000" , category: "Comic", image: "/public/img/1.webp"},
        {id: "2" , name: "Batman Red Hood", description: "Descripción del producto",  stock: "Disponibles: 10" , price: "$4.500" , category: "Comic", image: "/public/img/2.jpg"},
        {id: "3" , name: "The Killing Joke", description: "Descripción del producto",  stock: "Disponibles: 10" , price: "$6.000", category: "Comic", image: "/public/img/3.jpg"},
        {id: "4" , name: "Steel Ball Run 1", description: "Steel Ball Run. Secuela de Jojo´s. Escrito por Hirohiko Araki",  stock: "Disponibles: 10" , price: "$8.000", category: "Manga", image: "/public/img/4.jpg"},
        {id: "5" , name: "Steel Ball Run 2", description: "Steel Ball Run. Secuela de Jojo´s. Escrito por Hirohiko Araki",  stock: "Disponibles: 10" , price: "$8.000", category: "Manga", image: "/public/img/5.jpg"},
        {id: "6" , name: "Steel Ball Run 3", description: "Steel Ball Run. Secuela de Jojo´s. Escrito por Hirohiko Araki",  stock: "Disponibles: 10" , price: "$8.000", category: "Manga", image: "/public/img/6.webp"},
        {id: "7" , name: "Digimon Word: Next Order", description: "Juego de Digimon. Reboot de Digimon Word 1. Disponible para Pc y Ps4/Ps5.",  stock: "Disponibles: 10" , price: "$20.000", category: "VideoJuegos", image: "/public/img/7.jpg"},
        {id: "8" , name: "BloodBorn", description: "Juego de la franquicia Souls. Exclusivo para Ps4.",  stock: "Disponibles: 10" , price: "$11.500", category: "VideoJuegos", image: "/public/img/8.jpg"},
        {id: "9" , name: "The Last Guardian", description: "Juego dentro de la trilogia de Shadow of the Colosus e ICO. Exclusivo para Ps4",  stock: "Disponibles: 10" , price: "$9.000", category: "VideoJuegos", image: "/public/img/9.jpg"},
];

export const getProducts = (() => {
    return new Promise ((resolve, reject) => {
        if(products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        }else{
            reject("No hay productos disponibles")
        }
    })
});

export const getProductsById = ((id) =>{
    return new Promise((resolve, reject) => {
        if(products.length > 0) {
            const product =products.find(p=>p.id === id);
            setTimeout(() => {
               if(!product){
                reject(`No se encuentra el producto con el id ${id}`)
               } 
               resolve(product);
            }, 2000);
        }else{
            reject("No se encontro el producto");
        }
    })
})