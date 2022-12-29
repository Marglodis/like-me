const { agregarPost, obtenerPosts,deletePost } = require("./consulta"); 

const app = express();

app.use(express.static('views'))

  app.get('/', () => {
    res.sendFile(__dirname,"index.html")
})


app.get("/posts", async (req, res) => {
  const posts = await obtenerPosts();
  res.json(posts);
});


app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body
    await agregarPost(titulo, url, descripcion)
    res.send("Posts agregado con éxito")
   })
   

   app.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;
    await deletePost(id)
    res.send("Post eliminado");
  });