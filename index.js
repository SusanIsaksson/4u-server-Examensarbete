let express = require ('express');
let app = express();
let cors = require('cors');
let port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true 
}));



app.listen(port, () => {
    console.log('Listen at http://localhost:3005');
});
