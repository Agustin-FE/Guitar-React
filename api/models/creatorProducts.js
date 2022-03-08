const Products = require('./Products.js')

Products.bulkCreate([
    {
        nombre: "Guitarra verde",
        precio:10000,
        descripcion: "guitarra 1",
        categoria: "acustica" ,
        marca: "ibanez",
        imagen: "https://m.media-amazon.com/images/I/31uOScWxZdL._SL500_.jpg",
        stock: 5
    },
    {
        nombre: "Guitarra roja",
        precio:8000,
        descripcion: "guitarra 2",
        categoria: "electrica" ,
        marca: "Gibson",
        imagen: "https://m.media-amazon.com/images/I/31uOScWxZdL._SL500_.jpg",
        stock: 3
    },
    {
        nombre: "Guitarra azul",
        precio:10000,
        descripcion: "guitarra 1",
        categoria: "criolla" ,
        marca: "ibanez",
        imagen: "https://m.media-amazon.com/images/I/31uOScWxZdL._SL500_.jpg",
        stock: 2
    },
    {
        nombre: "Guitarra negra",
        precio:8000,
        descripcion: "guitarra 1",
        categoria: "electrica" ,
        marca: "Gibson",
        imagen: "https://m.media-amazon.com/images/I/31uOScWxZdL._SL500_.jpg",
        stock: 8
    },
    {
        nombre: "Guitarra blanca",
        precio:8000,
        descripcion: "guitarra 1",
        categoria: "electrica" ,
        marca: "Gibson",
        imagen: "https://m.media-amazon.com/images/I/31uOScWxZdL._SL500_.jpg",
        stock: 1
    }    
])
