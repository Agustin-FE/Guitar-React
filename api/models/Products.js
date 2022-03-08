const products = require('./products.json')


class Product extends Model {}

const createProduct = () => {
    return(
        /* products.map((productSold) => {
            Product.create({
                nombre: productSold.nombre,
                precio: productSold.precio,
                descripcion: productSold.descripcion,
                categorias: productSold.categorias,
                marca: productSold.marca,
                imagen: productSold.imagen,
                stock: productSold.stock
              }, { sequelize: db, modelName: 'products' }); 
        })*/
    ) 
}

module.exports = createProduct
    

      