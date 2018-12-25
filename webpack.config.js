const path = require("path");

const config = {
    entry:path.resolve(__dirname, "./src", "index.js"),
    output:{
        path:path.resolve(__dirname, "./dist"),
        filename:"bundle.js"
    },

    module:{
        rules:[
            {test:/\.jsx?$/, loader:"babel-loader"},
            {test:/\.scss$/, loaders:["style-loader", "css-loader", "sass-loader"]}
        ]
    }
};

module.exports = config;
