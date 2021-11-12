

const mysql2 = require('mysql2')


const conn = mysql2.createConnection({
    host: "eu-cdbr-west-01.cleardb.com",
    user: "b3e46d0f59e357",
    password: "26c6ffd2",
    database: "heroku_2dc269a62802d6e",
});

conn.connect(err => {
    if(err){
        console.log(err);
        return err;
    }else{
        console.log('data base ----- ok');
    }
})