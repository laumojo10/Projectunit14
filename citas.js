const express = require("express");

const mysql = require('mysql2');

const app = express();

let conexion = mysql.createConnection({
    host:"localhost",                        
    database:"citas",
    user:"root"
});

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json()); // Agrega los paréntesis para invocar la función
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.render("eps");
    });
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
    let cedula = datos.cedula;
    let especialidad = datos.especialidad;
    let doctor = datos.doctor;
    let paciente= datos.paciente; 
    

    
    let enviar = "INSERT INTO tabla_citas(cedula,especialidad,doctor,paciente)VALUES('"+cedula+"','"+especialidad+"','"+doctor+"','"+paciente+"')";
        conexion.query(enviar, function(error,result) {
            if (error) {
                throw error;
            } else {
                console.log("Datos almacenados con éxito en tabla_pacientes");
                console.log("ID insertado:", result.insertId); // Muestra el ID del registro insertado
                res.render("eps",datos); // Aquí se envían los datos a la vista
            }
    });
    res.redirect("/"); // Redirige a la página principal después de guardar los datos
});
app.get("/registro_citas", function (req, res) {
    conexion.query("SELECT * FROM tabla_citas", function (error, resultados) {
        if (error) {
            console.error("Error al obtener los datos de los doctores:", error);
            throw error;
        } else {
            res.render("registro_citas", { citas: resultados });
        }
    });
});

app.listen(8081, function() {
    console.log("Servidor de pacientes creado http://localhost:8081");
});