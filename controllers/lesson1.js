const archieRoute = (req, res) => {
    res.send("Archie Giard");
};

const gwenRoute = (req, res) => {
    res.send("Gwen Giard");
};

module.exports = {
    archieRoute,
    gwenRoute
};