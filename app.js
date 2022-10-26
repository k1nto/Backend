const express = require('express'),
    app = express(),
    port = 3000

app.get('/', (req, res) =>{
    res.send('test')
})

app.listen(port, () => {
    console.log('link: localhost:' + port)
})