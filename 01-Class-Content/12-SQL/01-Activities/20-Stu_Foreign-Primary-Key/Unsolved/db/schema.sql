-- Write your Schema Here -- 
if exists drop database work_db;
create database work_db; 

use work_db;

create table customers (
    id int not null primary key,
    first_name varchar(30),
    last_name varchar(30),

);

create table customer_order (
    id int not null,
    customer_id int not null,
    order_details text not null
    foreign key (customer_id)
    REFERENCES customers(id)
    on delete set null
)
