const express = require('express');
const app = express();
const ejs = require('ejs')
const port = 3000;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = [154, 65]
    res.render('index', { siteName: siteName, searchText: searchText, arr })
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});