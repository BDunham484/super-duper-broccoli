-- Add your code below and execute file in MySQL Shell --
select * from favorite_books fb inner join book_prices bp on fb.book_price = bp.id order by fb.id;