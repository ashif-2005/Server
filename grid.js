const mongodb = require('mongoose')

const schema = new mongodb.Schema({
    data: {
        type: Array
    }
})

const Grid = mongodb.model("grid",schema)

module.exports = {Grid}