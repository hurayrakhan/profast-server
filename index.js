const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('profast server is running on port ' + port)
})

app.listen(port, () => {
    console.log('server is running on port' + port)
})