import pool from "../data/connection.js";

export async function getAllMarket (req, res, next){
    try {
        const data = await pool.query("SELECT * FROM market");
        res.status(200).send({
            status : "OK",
            mal : data.rows
        }
        )
    } catch (error) {
        next(error)
    }
}


export async function createMarket (req, res, next){
    try {
        const body = req.body
        const {name, grade } = body
        const data = await pool.query(`insert into market(name, grade)
        values($1, $2)`,[name, grade]);
        res.status(200).send({
            status : "OK",
            mal : "Malumot qoshildi..."
        }
        )
    } catch (error) {
        next(error)
    }
}

