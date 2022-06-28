const express = require('express');
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express();
const port = 3030;

app.use(express.static('public'));
app.get('/home', (req,res) => res.sendFile(path.join(__dirname, '/views', 'home.html')));
app.listen(port, () => (console.log('servidor corriendo en ' + port)));