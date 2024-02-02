const router = require('express').Router();
const User = require('../../models/User');

// GET all books
router.get('/', (req, res) => {
  // Get all books from the book table
  User.findAll().then((userData) => {
    res.json(userData);
  });
});

// GET one user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new user
router.post('/', async (req, res) => {
  console.log('req.body: ', req.body);
  try {
    const userData = await User.create(req.body);
    console.log('userData: ', userData);
    res.status(200).json(userData);
  } catch (err) {
    console.log('NOPE!')
    res.status(400).json(err);
  }
});

// PUT update a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
