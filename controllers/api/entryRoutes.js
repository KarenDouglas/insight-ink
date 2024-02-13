
const router = require('express').Router();
const { Entry, User, Habit } = require('../../models');

//This is to get all entries
router.get('/', async (req, res) => {
  try {
    const entries = await Entry.findAll({ 
       include: [{ model: Habit }]
    });
      console.log('entry', req.session)
    res.status(200).json(entries);
} catch (err) {
  console.error(err);
  res.status(500).json({ error: 'Could not get entries.' });
}
});

// This gets entry by specific ID 
router.get('/:id', async (req, res) => {
  try {
    const entry = await Entry.findByPk(req.params.id, {
      include: [{ model: User, attributes: [{id}] }]
    });

    if (!entry) {
      res.status(404).json({ error: 'Entry not found.' });
      return;
    }

    res.status(200).json(entry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve the entry.' });
  }
}); 

//This posts a new entry 
router.post('/newEntry', async (req, res) => {
    try {
      const newEntry = await Entry.create(req.body);
      res.status(200).json(newEntry);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Entry not created.' });
    }
  });

  //Edit entry
  router.put('/:user_id', async (req, res) => {
    try {
        const editEntry = await Entry.edit(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (editEntry[0] === 0) {
          res.status(404).json({ error: 'Entry not found.' });
          return;
        }
        res.status(200).json({ message: 'Entry updated successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update the entry.' });
  }
});

//This deletes entry by using ID 
router.delete('/:id', async (req, res) => {
  try {
    const deletedEntryCount = await Entry.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (deletedEntryCount === 0) {
      res.status(404).json({ error: 'Entry not found.' });
      return;
    }

    res.status(200).json({ message: 'Entry deleted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete the entry.' });
  }
});


module.exports = router;
