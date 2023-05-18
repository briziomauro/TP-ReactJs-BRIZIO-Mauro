const products = [
    {
        id:'1',
        name:'Mate Imperial',
        price:'9500',
        category:'Mates',
        img:'https://matesibarra.com/wp-content/uploads/2021/06/linea-f.jpg',
        stock: 20 ,
        description:'Mate Imperial Cincelado',

    },
    {
        id:'2',
        name:'Bombilla Pico Loro',
        price:'1500',
        category:'Bombillas',
        img:'https://apolomates.com.ar/wp-content/uploads/2016/08/Pico-de-loro-acero-1.jpg',
        stock: 10 ,
        description:'Bombilla Pico Loro de acero inoxidable',

    },
    {
        id:'3',
        name:'Matera de cuero',
        price:'8500',
        category:'Materas',
        img:'https://estiloaustral.com/wp-content/uploads/2023/03/MATERA011-CANASTA-MATERA-CUERO-VAQUETA.png.webp',
        stock: 13 ,
        description:'Matera de cuero',

    },
    {
        id:'4',
        name:'Termo Stanley',
        price:'20500',
        category:'Termos',
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/179/973/products/0946de7d-5ae1-4b88-8467-b7b0393e43d81-7870a2be6ff3b2d2fe16723596616129-1024-1024.webp',
        stock: 8 ,
        description:'Termo Stanley blanco de 1lt',

    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}
export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}