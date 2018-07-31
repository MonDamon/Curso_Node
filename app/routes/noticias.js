
module.exports = function(app) {
  
    app.get('/noticias', function(req,res){
        let mysql = require('mysql');

        let connection = mysql.createConnection({
            host: 'xxxx',
            user: 'xxxxxx',
            password:'xxxx',
            database: 'portal_noticias',
        });
    
        connection.query("select * from noticias",function(error,result){
                res.send(result);
        });
       // res.render("noticias/noticia");
});
};