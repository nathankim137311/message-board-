const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const port = 3000; 

app.listen(port, () => console.log(`server started on port ${port}...`));

// Middleware 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname)); // css as static

app.get('/new', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/new', (req, res) => {
    res.send(req.body);
});

