const {v4: uuidv4} = require('uuid'); 
exports.create = async (req, res) => {
    const data = {
        idProduk: uuidv4(),
        namaProduk: req.body.namaProduk,
        deskripsiProduk: req.body.deskripsiProduk,
        hargaProduk: req.body.hargaProduk,
        fotoProduk: req.body.fotoProduk
    }
    console.log("DATA >>", data);
    res.send({
        message: 'OK'
    })
}

exports.findAll = async (req, res) => {
    res.send({
        message: 'Ok Find'
    })
}