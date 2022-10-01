const express = require('express');
const cors = require('cors');
const router = require('./routes/route');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// route
app.use('/user', router);

app.get('/', (req, res) => {
    res.send('YAY Server running!!')
})

app.all('*', (req, res) => {
    res.send('NO route found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})