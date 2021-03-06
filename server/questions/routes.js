const express = require('express');

const questionsController = require('./questions-controller');
const answersController = require('./answers-controller');

const createSeed = require('../../seed/seed').createSeed;
const clearSeed = require('../../seed/seed').clearSeed;

const questionsRoutes = express();

questionsRoutes.get('/questions', questionsController.getAll);

questionsRoutes.get('/questions/:id', questionsController.get);

questionsRoutes.post('/questions/', questionsController.post);

questionsRoutes.put('/questions/:id', questionsController.put);

questionsRoutes.delete('/questions/:id', questionsController.delete);

questionsRoutes.post('/questions/:questionId/answers', answersController.postAnswer);

questionsRoutes.put('/questions/:questionId/answers/:answerId', answersController.putAnswer);

questionsRoutes.post('/seed', createSeed);

questionsRoutes.delete('/seed', clearSeed);

module.exports = questionsRoutes;
