const del = require("del");

//configuration
const path = require("../config/path.js");

// удаление директории
const clear = () => {
    return del(path.root);
}

module.exports = clear;