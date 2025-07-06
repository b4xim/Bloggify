import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.render("index.ejs");
})
app.post("/submit", (req, res)=>{
    const blog = req.body.blog;
    res.render("blogs.ejs", {blog});
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)    
})