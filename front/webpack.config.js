module.exports = {
    entry: {
        index: "./scripts/index.js",
        load: "./scripts/load.js"
},

    output: {
        path: __dirname + "/public",
        filename: "[name].js",
    }
}