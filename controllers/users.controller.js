import pool from "../data/connection.js";


export async function getUsers (req, res, next){
    try {
        const data = await pool.query("SELECT * FROM users");
        res.status(200).send({
            status : "OK",
            mal : data.rows
        }
        )
    } catch (error) {
        next(error)
    }
}

export async function createUsers (req, res, next){
    try {
        const body = req.body
        const {name, age, salary, market_id} = body
        const data = await pool.query(`insert into users(name, age, salary, market_id)
        values($1, $2, $3, $4)`,[name, age, salary, market_id]);
        res.status(200).send({
            status : "OK",
            mal : "Malumot qoshildi..."
            }
        )
    } catch (error) {
        next(error)
    }
}

export async function putUsers (req, res, next){
    try {
        const id = parseInt(req.params.id);
        const body = req.body
        const data = await pool.query(`update users
        set name = $1
        where id = $2 `,[body, id]);
        res.status(200).send({
            status : "OK",
            mal : "Malumot yangilandi..."
            }
        )
    } catch (error) {
        next(error)
    }
}

export async function deleteUsers (req, res, next){
    try {
        const id = parseInt(req.params.id);
        const data = await pool.query(`delete from users
        where id = $1 `,[id]);
        res.status(200).send({
            status : "OK",
            mal : "Malumot ochirildi..."
            }
        )
    } catch (error) {
        next(error)
    }
}