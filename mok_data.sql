CREATE TABLE IF NOT EXISTS market(
    id serial PRIMARY KEY,
    name VARCHAR(200),
    grade int
);

CREATE TABLE IF NOT EXISTS users (
            id serial PRIMARY KEY,
            name VARCHAR(20) UNIQUE,
            age int,
            salary int,
            market_id int,
            FOREIGN KEY(market_id) REFERENCES market(id)
);


CREATE TABLE IF NOT EXISTS basket(
    id serial PRIMARY KEY,
    name VARCHAR(200),
    user_id int, 
    market_id int,
    FOREIGN KEY(user_id) REFERENCES basket(id),
    FOREIGN KEY(market_id) REFERENCES market(id)
);


CREATE TABLE IF NOT EXISTS products(
    id serial PRIMARY KEY,
    name VARCHAR(255),
    product_size  int,
    salary float,
    market_id int,
    basket_id int,
    user_id int,
    FOREIGN KEY(market_id) REFERENCES market(id),
    FOREIGN KEY(basket_id) REFERENCES basket(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS comments(
    id serial PRIMARY KEY,
    comment text,
    user_id int,
    product_id int,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
)
