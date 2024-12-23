const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const NewModel = require("./models/ArticleSchema.js");
app.listen(3000, () => {});

app.get("/", (req, res) => {
    res.json({ name: "swap"});
});

app.post("/api/addnews", async(req, res) =>{
    try{
        const news = await NewModel.create(req.body);
        res.status(200).json(news);
        console.log(req.body);
    } catch (error){
        res.send(500);
    }
});

app.get("/api/addnews", async(req, res) =>{
    try{
        const news = await NewModel.find({});
        res.status(200).json(news);
        console.log(req.body);
    } catch (error){
        res.send(500);
    }
});

app.get("/api/addnews", async(req, res) =>{
    try{
        const {id} = req.params;
        const news = await NewModel.findById(id);
        res.status(200).json(news);
       // console.log(express.json(news));
    } catch (error){
        res.send(500);
    }
});

app.put("/api/addnews", async(req, res) =>{
    try{
        const {id} = req.params;
        const news = await NewModel.findByIdAndUpdate(id, req.body);
        if(!news){
            return res.status(404).json({ Message: "News not found"});
        }
        const updatenews = await NewModel.findById(id);
        res.status(200).json(updatenews);
    } catch (error){
        res.send(500);
    }
});

app.delete("/api/addnews", async(req, res) =>{
    try{
        const {id} = req.params;
        const news = await NewModel.findByIdAndUpdate(id, req.body);
        if(!news){
            return res.status(404).json({ Message: "News not found"});
        }
        const updatenews = await NewModel.findById(id);
        res.status(200).json("Deleted");
    } catch (error){
        res.send(500);
    }
});

mongoose 
  .connect(" "

  )
   .then(()=>{
     console.log("connected to DB");
   });

