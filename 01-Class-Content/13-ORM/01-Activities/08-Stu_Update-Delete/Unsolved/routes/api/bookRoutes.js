const router = require('express').Router();
const Book = require('../../models/Book');

// GET all books
router.get('/', (req, res) => {
  // Get all books from the book table
  Book.findAll().then((bookData) => {
    res.json(bookData);
  });
});

router.get('/:book_id', async (req, res) => {
  const { book_id } = req.params;

  try {
    const book = await Book.findByPk(book_id)
    // const book = await Book.findByPk(book_id, {
    //   attributes: [fields]
    // })

    if (!book) {
      return res.status(404).json(`Could no locate book_id: ${book_id}`);
    }

    return res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
})

// TODO finish the PUT route to UPDATE a book in the database with a matching book_id
router.put('/:book_id', (req, res) => {
  Book.update(
    {
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      pages: req.body.pages,
      edition: req.body.edition,
      is_paperback: req.body.is_paperback,
    },
    {
      where: {
        book_id: req.params.book_id,
      },
    }
  )
  .then((updatedBook) => {
    res.status(201).json(updatedBook);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  })
});

// TODO finish the DELETE route to DELETE a book in the database with a matching book_id
router.delete('/:book_id', async (req, res) => {
  const { book_id } = req.params;
  try {
    const deletedBook = await Book.destroy({
      where: {
        book_id: book_id,
      },
    })

    res.json(deletedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/seed', (req, res) => {
  Book.bulkCreate([
    {
      title: 'Make It Stick: The Science of Successful Learning',
      author: 'Peter Brown',
      isbn: '9780674729018',
      pages: 336,
      edition: 1,
      is_paperback: false,
    },
    {
      title:
        'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
      author: 'Kenneth Rubin',
      isbn: '9780137043293',
      pages: 500,
      edition: 1,
      is_paperback: true,
    },
    {
      title:
        "White Fragility: Why It's So Hard for White People to Talk About Racism",
      author: 'Robin DiAngelo',
      isbn: '9780807047415',
      pages: 192,
      edition: 2,
      is_paperback: true,
    },
    {
      title: 'The Pragmatic Programmer: Your Journey To Mastery',
      author: 'David Thomas',
      isbn: '9780135957059',
      pages: 352,
      edition: 2,
      is_paperback: false,
    },
    {
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
      author: 'Donald Knuth',
      isbn: '9780201896831',
      pages: 672,
      edition: 3,
      is_paperback: false,
    },
    {
      title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
      author: 'Safiya Umoja Noble',
      isbn: '9781479837243',
      pages: 256,
      edition: 1,
      is_paperback: true,
    },
  ]).then(() => {
    res.send('Seeding Success!');
  });
});

module.exports = router;
