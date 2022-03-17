  const mysql = require("mysql");
   const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"facebook",
    multipleStatements:true,
   });
   con.connect(function(error){
    if(error) throw error;
    con.query("select *from user", function(err,result){
         if(error) throw err;
         console.log("The database conection",result);
    })
   }) 
