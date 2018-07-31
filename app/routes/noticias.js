
module.exports = function(app) {
  
    app.get('/noticias', function(req,res){
        let mysql = require('mysql');

        let connection = mysql.createConnection({
            host: '52.71.244.54',
            user: 'mondamon',
            password:'123456',
            database: 'portal_noticias',
        });
    
        connection.query("select * from noticias",function(error,result){
                res.send(result);
        });
       // res.render("noticias/noticia");
});
};