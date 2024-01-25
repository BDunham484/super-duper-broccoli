drop database if exists class_db;
create database class_db;

use class_db;

create table products(
    id int not null,
    product_name varchar(30) not null,
    category_name varchar(100) not null,
    price int not null,
    in_stock boolean
);

create table categories(
    id int not null,
    category_name varchar(30) not null
);