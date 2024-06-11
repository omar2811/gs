import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

app.get("/stores/recommended", (req, res) => {
    res.set({
        "x-latitud": "19.21313",
        "x-longitud": "-19.5232",
        "x-ip": "190.181.265",
        "x-id-publicidad": "asdasd-asdasda-d-asd"
    });
    res.json({
        success: true,
        fol_number: "abc-1231-asdasd-123123",
        message: "Operacion exitosa",
        result: {
            // RESPUESTA
        }
    });
});

app.get('/api/enrollment/login', (req, res) => {
    res.set({
        "x-latitud": "19.21313",
        "x-longitud": "-19.5232",
        "x-ip": "190.181.265",
        "x-id-publicidad": "asdasd-asdasda-d-asd"
    });
    res.json({
        success: true,
        fol_number: "abc-1231-asdasd-123123",
        message: "Operacion exitosa",
        result: {
            "is_debug": process.env.IS_DEBUG
        }
    });
});

app.listen(3000, () => {
    console.log("server en el puerto 3000");
});
