
exports.getDashboardPage = (req, res) => {
    res.render('pages/dashboard', {
        title : 'Student Management System'
    });
}