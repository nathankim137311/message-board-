const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const port = 3000; 

app.listen(port, () => console.log(`server started on port ${port}...`));

// Middleware 
app.use(express.static(__dirname)); // css as static
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/new', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/messages', (req, res) => {
    const message = {
        title: req.body.title,
        message: req.body.message,
        date: new Date(), 
    }
    res.send(`<a href="/new">New Message</a><p>${message.title}</p><p>${message.message}</p><p>${message.date}</p>`).status(200);
});
