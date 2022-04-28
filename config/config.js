module.exports = {
    BASE_URL : 'https://localhost:8000/',
    HOST : 'localhost',
    USER : 'root',
    PASSWORD : '',
    DBNAME :'toko_atk2',
    dialect : 'mysql',
    DBPORT: 3306,
    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
}