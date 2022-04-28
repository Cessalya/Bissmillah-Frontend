module.exports = (sequelize, Sequelize) => {
    const Produk = sequelize.define('produk', {
        idProduk: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        namaProduk:{
            type: Sequelize.STRING
        },
        deskripsiProduk:{
            type: Sequelize.TEXT
        },
        hargaProduk:{
            type: Sequelize.INTEGER
        },
        fotoProduk:{
            type: Sequelize.STRING
        }
    })
    return Produk;
}
