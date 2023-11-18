//

const indexCtrl = {};

indexCtrl.renderPrincipal = (req, res) => {
    res.render('principal')
};

indexCtrl.renderAbout = (req, res) => {
    res.render('about')
};

indexCtrl.renderRegistro = (req, res) => {
    res.render('registro')
};

module.exports = indexCtrl;