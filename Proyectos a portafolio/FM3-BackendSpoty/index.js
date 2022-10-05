const express = require("express");
const request = require("request");
const path = require("path");


const app = express();
require("dotenv").config();


const port = process.env.PORT || 3000;

app.use(express.static("public"));


app.use((req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*");
    resp.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/spotify/:client_id/:client_secret", (req, resp) => {
    let client_id = req.params.client_id;
    let client_secret = req.params.client_secret;
    let spotifyUrl = 'https://accounts.spotify.com/api/token';

    var authOptions = {
        url: spotifyUrl,
        headers: {
            Authorization: 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };

    request.post(authOptions, (err, httpResponse, body) => {

        if (err) {
            return resp.status(400).json({
                ok: false,
                mensaje: 'No se pudo obtener el token',
                err
            })
        }

        resp.json(body);

    });

});


app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/index.html"));
})


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);

})





