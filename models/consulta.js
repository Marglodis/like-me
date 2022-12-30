
pool = require('../config/db')

const agregarPost = async (titulo, img,descripcion) => {
    const consulta = "INSERT INTO posts (titulo, img, descripcion) values ($1, $2, $3)";
    const valores = [titulo, img, descripcion];
    const resultado = await pool.query(consulta, valores);
    return(resultado);
};

const obtenerPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts")
//    console.table(rows)
    return rows
   }
   
const deletePost = async (id) =>{
    const consulta = `delete from posts where id=$1`;
    const resultado =await pool.query(consulta,[id])
    return(resultado);
 }

   module.exports = { agregarPost, obtenerPosts,  deletePost}