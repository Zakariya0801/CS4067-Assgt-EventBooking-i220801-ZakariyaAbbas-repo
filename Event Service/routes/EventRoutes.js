const express = require('express');
const router = express.Router();
const eventController = require('../controllers/EventController'); // Adjust path as needed

// Create an event
router.post('/', eventController.createEvent);

// Get all events
router.get('/', eventController.getAllEvents);

// Get a single event by ID
router.get('/:id', eventController.getEventById);

// Update an event by ID
router.put('/:id', eventController.updateEvent);

// Delete an event by ID
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
