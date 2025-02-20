const express = require(`express`);
const app = express();





//configuro el servidor
const PORT = 4005;
app.listen(PORT, ()=>{
    console.log(`el servidor esta corriendo en el puero ${PORT}`);
});