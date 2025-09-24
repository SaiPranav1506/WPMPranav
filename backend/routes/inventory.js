const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const inventoryController = require('../controllers/inventoryController');

router.post('/', auth, inventoryController.createItem);
router.get('/', auth, inventoryController.getItems);
router.get('/:id', auth, inventoryController.getItemById);
router.put('/:id', auth, inventoryController.updateItem);
router.delete('/:id', auth, inventoryController.deleteItem);

module.exports = router;
