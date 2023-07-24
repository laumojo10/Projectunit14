const express = require("express");

const mysql = require('mysql2');

const app = express();

let conexion = mysql.createConnection({
    host:"localhost",                        
    database:"doctores",
    user:"root"
});

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json()); // Agrega los paréntesis para invocar la función
app.use(express.urlencoded({ extended: false }));

// Ruta para mostrar la página de inicio
app.get("/", function (req, res) {
    res.render("eps");
    });

// Ruta para mostrar el formulario de doctores
app.get("/doctores", function (req, res) {
    res.render("doctores");
    });
// Ruta para mostrar el formulario de doctores
app.get("/pacientes", function (req, res) {
    res.render("pacientes");
    });

app.get("/registro_doctores", function (req, res) {
    res.render("registro_doctores");
    });
app.get("/registro_pacientes", function (req, res) {
    res.render("registro_pacientes");
    });
app.get("/asignarcitas", function (req, res) {
    res.render("asignarcitas");
    });

    app.get("/registro_citas", function (req, res) {
    res.render("registro_citas");
    });


app.post("/validar", function(req, res) {
    const datos = req.body;
    let nombre = datos.nombre;
    let apellido = datos.apellido;
    let especialidad = datos.especialidad;
    let consultorio = datos.consultorio;
    let correo = datos.correo;
    
    let registrar = "INSERT INTO tabla_doctores(nombre,apellido,especialidad,consultorio,correo)VALUES('"+nombre+"', '"+apellido+"', '"+especialidad+"', '"+consultorio+"', '"+correo+"')";
        conexion.query(registrar, function(error,result) {
        if (error) {
            console.error("Error al ejecutar la consulta:", error);
            throw error;
        } else {
            console.log("Datos almacenados con éxito en tabla_doctores");
            console.log("ID insertado:", result.insertId); // Muestra el ID del registro insertado
            res.render("eps",datos); // Aquí se envían los datos a la vista
        }
    });
    res.redirect("/"); // Redirige a la página principal después de guardar los datos
});
app.get("/registro_doctores", function (req, res) {
    conexion.query("SELECT * FROM tabla_doctores", function (error, resultados) {
        if (error) {
            console.error("Error al obtener los datos de los doctores:", error);
            throw error;
        } else {
            res.render("registro_doctores", { doctores: resultados });
        }
    });
});
app.listen(8081, function() {
    console.log("Servidor de doctores creado http://localhost:8081");
});