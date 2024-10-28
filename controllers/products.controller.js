import pool from "../data/connection.js";

export async function getAllProduct (req, res, next){
    try {
        const data = await pool.query("SELECT * FROM products");
        res.status(200).send({
            status : "OK",
            mal : data.rows
        }
        )
    } catch (error) {
        next(error)
    }
}


export async function createProduct (req, res, next){
    try {
        const body = req.body
        const {name, product_size, salary, market_id, basket_id, user_id} = body
        const data = await pool.query(`insert into products(name, product_size, salary,market_id, basket_id, user_id)
        values($1, $2, $3, $4, $5, $6)`,[name, product_size, salary, market_id, basket_id, user_id]);
        res.status(200).send({
            status : "OK",
            mal : "Malumot qoshildi..."
            }
        )
    } catch (error) {
        next(error)
    }
}



export async function putProduct (req, res, next){
    try {
        const id = parseInt(req.params.id)
        const body = req.body
        const data = await pool.query(`UPDATE products
        SET name = $1
        WHERE id = $2`, [body.name, id]);
        res.status(200).send({
            status : "OK",
            mal : "Malumot yangilandi..."
            }
        )
    } catch (error) {
        next(error)
    }
}


export async function deleteProduct (req, res, next){
    try {
        const id = parseInt(req.params.id);
        const data = await pool.query(`delete from products
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