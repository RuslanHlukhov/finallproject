// const express = require("express");
// const app = express()
// const mysql = require('mysql');
// const cors = require('cors')

// app.use(cors());
// app.use(express.json())

// const db = mysql.createConnection({
//   root: 'b3e46d0f59e357',
//   host: 'eu-cdbr-west-01.cleardb.com',
//   password: '26c6ffd2',
//   database: 'heroku_2dc269a62802d6e'
// })

// app.post('/',(req, res) =>{
//   const title = req.body.title;
//   const text = req.body.text;

//   db.query(
//     'INSERT INTO test (title, text) VALUES (?,?)'[title, text],
//     (err,result) =>{
//       if(err){
//         console.log(err);
//       }else{
//         res.send('Values inserted')
//       }
//     }
//   );
// });

// app.listen(3306, () =>{
//   console.log('Running om port 3306');
// })

