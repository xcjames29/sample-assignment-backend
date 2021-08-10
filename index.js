require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const DetailsController = require("./controller/detailsController");
const cors = require("cors");
app.use(morgan("dev"));
app.use(express.static("static"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.get("/details", async(req,res)=>{
    console.log("details in");
    try{
        let data = {current:null,others:null };
        data.current = await DetailsController.getData();
        data.others = await DetailsController.getOthersNearby();
        res.status(200).send(data);
    }
    catch(e){
        console.log(e.message);
        res.status(400).send(e.message);
    }
})


app.listen(process.env.PORT,()=>{
    console.log("Server is listening at PORT:" + process.env.PORT);
})