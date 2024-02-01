const router = require('express').Router();
const User = require('../../models/User');

// changelog-start
router.get('/', (req, res) => {
  // Get all books from the book table
  User.findAll().then((userData) => {
    res.json(userData);
  });
});
// changelog-end

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes
try {
  router.get('/:id', async (req, res) => {
    const userData = await User.findByPk(req.params.id)

    if (!userData) {
      res.status(404).json(userData);
      return
    }

    res.status(200).json(userData);
  })
} catch (err) {
  console.error(err);
  res.status(500).json(err);
}

// GET a user
// router.get('/:id', async (req, res) => {
//   const userData = await User.findByPk(req.params.id).catch((err) =>
//     res.json(err)
//   );
//   res.json(userData);
// });

// UPDATE a user
router.put('/:id', async (req, res) => {
  const userData = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(userData);
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  const userData = await User.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(userData);
});

module.exports = router;
