import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud_cars",
})

db.connect((err) => {
    if (err) {
        console.error("Erro de conexão com o banco de dados:", err);
        return;
    }
    console.log("Conectado ao banco de dados!");
});