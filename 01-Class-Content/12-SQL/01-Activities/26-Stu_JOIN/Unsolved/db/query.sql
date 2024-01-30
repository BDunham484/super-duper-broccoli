-- Add your code below and execute file in MySQL Shell --
select fb.book_name as Title, bp.price as Price from favorite_books fb join book_prices bp on fb.book_price = bp.id order by bp.price;