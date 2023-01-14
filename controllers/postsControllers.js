const controller = {};
const {
  agregarPost,
  obtenerPosts,
  deletePost,
  updatePost,
  obtenerOnePost
} = require("../models/consulta");

controller.index = () => {
  res.sendFile(__dirname, "index.html");
};

controller.get = async (req, res) => {
  const posts = await obtenerPosts();
  res.json(posts);
};

controller.getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await obtenerOnePost(id);
    res.json(post);
     } 
  catch (error) {
    res.status(500).send(`No se encontró el POST:${req.params.id}`);
    
  }
};

controller.post = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    await agregarPost(titulo, url, descripcion);
    res.send("Posts agregado con éxito");
  } catch (error) {
    const { code } = error;
    if (code == "23502") {
      res
        .status(400)
        .send(
          "Se ha violado la restricción NOT NULL en uno de los campos de la tabla"
        );
    } else {
      res.status(500).send(error);
    }
  }
};

controller.update = async (req, res) => {
  try {
    const { id } = req.params;
    await updatePost(id);
    res.send("Post actualizado con éxito");
  } catch (error) {
    res.status(500).send(`Error en la actualización del POST:${req.params.id}`);
  }
};

controller.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await deletePost(id);
    res.send(`Post ${req.params.id} eliminado`);
  } catch (error) {
    res.status(500).send(`Error en la elimnación del POST:${req.params.id}`);
  }
};

module.exports = controller;
