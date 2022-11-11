var pagesController = require('../controllers/pages.controller');

module.exports = (app) => {
    app.get('/', pagesController.getDashboardPage);
}