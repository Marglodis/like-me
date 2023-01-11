
const controller = {}
const { agregarPost, obtenerPosts,deletePost, updatePost } = require("../models/consulta");

controller.index = () => {
    res.sendFile(__dirname,"index.html")
}

controller.get = async (req, res) => {
    const posts = await obtenerPosts();
    res.json(posts);
  }

  controller.post = async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    await agregarPost(titulo, url, descripcion);
    res.send("Posts agregado con éxito");
  }

  controller.update = async (req, res) => {
    try{
    const { id } = req.params;
    await updatePost(id);
    res.send("Post actualizado con éxito");
  }
  catch (error){
      res.status(500).send(`Error en la actualización del POST:${req.params.id}`)
  }
      }


  controller.delete = async (req, res) => {
    const { id } = req.params;
    await deletePost(id);
    res.send("Post eliminado");
  }


module.exports = controller;