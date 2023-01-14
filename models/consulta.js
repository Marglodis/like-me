const pool = require("../config/db");

const agregarPost = async (titulo, img, descripcion) => {
  const consulta =
    "INSERT INTO posts (titulo, img, descripcion) values ($1, $2, $3)";
  const valores = [titulo, img, descripcion];
  const resultado = await pool.query(consulta, valores);
  return resultado;
};

const obtenerPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts order by id");
  return rows;
};

const obtenerOnePost = async (id) => {
  const consulta = "SELECT * FROM posts WHERE id = $1";
  const values = [id];
  const {rowCount, rows} = await pool.query(consulta, values);
  console.log(rowCount)
  if (rowCount === 0) {
    throw { code: 404, message: "No se consiguió ningún post con este id" }
    }
    else return rows
  
};

const updatePost = async (id) => {
  const updateQuery = "UPDATE posts SET likes=likes+1 WHERE id=$1";
  const val = [id];
  const {rowCount} =await pool.query(updateQuery, val);
  if (rowCount === 0) {
    throw { code: 404, message: "No se consiguió ningún post con este id" }
    }
};

const deletePost = async (id) => {
  const consulta = `delete from posts where id=$1`;
  const{rowCount} = await pool.query(consulta, [id]);
  if (rowCount === 0) {
    throw { code: 404, message: "No se consiguió ningún post con este id" }
    }
  };

module.exports = {
  agregarPost,
  obtenerPosts,
  deletePost,
  updatePost,
  obtenerOnePost,
};
