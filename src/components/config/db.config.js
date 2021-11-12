
// const express = require('express');
// const app = express();
// const mysql2 = require('mysql2')
// const cors = require('cors')


// app.use(cors())
// app.use(express.json())

// const conn = mysql2.createConnection({
//     host: "eu-cdbr-west-01.cleardb.com",
//     user: "b3e46d0f59e357",
//     password: "26c6ffd2",
//     database: "heroku_2dc269a62802d6e",
// });

// app.post('/home',(req, res)=>{
//     const title = req.body.title
//     const text = req.body.text

//     conn.query('INSERT INTO heroku_2dc269a62802d6e.test (title, text) VALUES (?, ?)',
//     [title, text], 
//     (err) =>{
//         if(err){
//             console.log(err);
//         } else{
//             res.send('data base ----- ok')
//         }
//     }
//     );
// })

// // conn.connect(err => {
// //     if(err){
// //         console.log(err);
// //         return err;
// //     }else{
// //         console.log('data base ----- ok');
// //     }
// // })