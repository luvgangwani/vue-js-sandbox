const express = require('express');
const path = require('path');


const app = express();

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/index.html'));
});

app.listen('3000', () => console.log('Server running at port 3000'));