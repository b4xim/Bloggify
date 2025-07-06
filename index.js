import express from "express";

const app = express();
const port = 3000;
const allBlogs = [];

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.render("index.ejs");
})
app.post("/submit", (req, res)=>{
    const blog = req.body.blog;
    const author = req.body.author;
    allBlogs.push({author, blog});
    res.redirect("/blogs")
})
app.get("/blogs", (req, res)=>{
    res.render("blogs.ejs", {allBlogs})
})
app.get("/blogs/edit/:id", (req, res)=>{
    const blogToEdit = allBlogs[req.params.id];
    res.render("edit.ejs", {blog: blogToEdit, id: req.params.id});
})
app.post("/blogs/update/:id", (req, res) => {
    const index = req.params.id;
  
    const updatedAuthor = req.body.author;
    const updatedContent = req.body.blog;

    allBlogs[index] = {
      author: updatedAuthor,
      blog: updatedContent
    };
  
    res.redirect("/blogs");
  });

app.get("/blogs/delete/:id", (req, res) => {
    const index = req.params.id;
  
    allBlogs.splice(index, 1);
  
    res.redirect("/blogs");
});
  

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)    
})