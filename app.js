let app = require('./config/server');

let rotaNoticias = require('./app/routes/noticias');
let rotaHome = require('./app/routes/home');
let rotaInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia');

rotaHome(app);
rotaNoticias(app);
rotaInclusaoNoticias(app);

app.listen(3000,
    function(){
        console.log("Vai Corinthians!!!!");
    });