const express = require("express");

const mysql = require('mysql2');

const app = express();

let conexion = mysql.createConnection({
    host:"localhost",                        
    database:"pacientes",
    user:"root"
});

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json()); // Agrega los paréntesis para invocar la función
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.render("eps");
    });

app.get("/pacientes", function (req, res) {
        res.render("pacientes");
        });

app.get("/doctores", function (req, res) {
            res.render("doctores");
            });
app.get("/asignarcitas", function (req, res) {
                res.render("asignarcitas");
                });

app.post("/validar", function(req, res) {
    const datos = req.body;
    let nombre = datos.nombre;
    let apellido = datos.apellido;
    let cedula = datos.cedula
    let edad = datos.edad; 
    let telefono = datos.telefono;
    let especialidad = datos.especialidad;

    
    let enviar = "INSERT INTO tabla_pacientes(nombre,apellido,cedula,edad,telefono,especialidad)VALUES('"+nombre+"','"+apellido+"','"+cedula+"','"+edad+"','"+telefono+"','"+especialidad+"')";
        conexion.query(enviar, function(error,result) {
            if (error) {
                throw error;
            } else {
                console.log("Datos almacenados con éxito en tabla_pacientes");
                console.log("ID insertado:", result.insertId); // Muestra el ID del registro insertado
                res.render("eps",datos); // Aquí se envían los datos a la vista
            }
    });
    res.redirect("/registro_pacientes"); // Redirige a la página principal después de guardar los datos
});
app.get("/registro_pacientes", function (req, res) {
    conexion.query("SELECT * FROM tabla_pacientes", function (error, resultados) {
        if (error) {
            console.error("Error al obtener los datos de los doctores:", error);
            throw error;
        } else {
            res.render("registro_pacientes", { pacientes: resultados });
        }
    });
});

app.listen(8082, function() {
    console.log("Servidor de pacientes creado http://localhost:8082");
});