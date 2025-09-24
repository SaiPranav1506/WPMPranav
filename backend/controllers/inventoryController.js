const Inventory = require('../models/Inventory');

exports.createItem = async (req, res, next) => {
  try {
    const { name, quantity, price } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });
    const item = new Inventory({ name, quantity, price, lastUpdated: Date.now() });
    await item.save();
    res.status(201).json({ item });
  } catch (err) {
    next(err);
  }
};

exports.getItems = async (req, res, next) => {
  try {
    const items = await Inventory.find().sort({ updatedAt: -1 });
    res.json({ items });
  } catch (err) {
    next(err);
  }
};

exports.getItemById = async (req, res, next) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json({ item });
  } catch (err) {
    next(err);
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const { name, quantity, price } = req.body;
    const item = await Inventory.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    if (name !== undefined) item.name = name;
    if (quantity !== undefined) item.quantity = quantity;
    if (price !== undefined) item.price = price;
    item.lastUpdated = Date.now();
    await item.save();
    res.json({ item });
  } catch (err) {
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const item = await Inventory.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    next(err);
  }
};
