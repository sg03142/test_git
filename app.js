const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

//app.get('/', (req, res) => res.send('Hello World!') ) → 삭제 필요
app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/',function(req,res){
res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))