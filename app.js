const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());

//ogólny middleware, który będzie nadawał każdemu przechodzącemu przez niego żądaniu
//nagłówek z informacją odnośnie CORS-ów
app.use((req, res, next) => {
    //wymieniasz domeny dopuszczone - czyli zamiast wszystkich czyli * można wymienić np. tylko nasz FE
    res.setHeader('Access-Controll-Allow-Origin', '*');
    //wymieniasz dozwolone metody http
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    //wymieniasz dozwolone headersy
    //jest grupa domyślnie dozwolonych
    //tutaj wymieniamy 2 jeden dotyczący autoryzacji drugi że uzywamy json
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    //trzeba pamiętać żeby póścić przejście do kolejnego middleware-a
    next();
})

app.use('/feed', feedRoutes);

app.listen(3000);
