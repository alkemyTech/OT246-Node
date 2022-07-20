const db = require('./models/index')
const sequelize = db.sequelize
const Category = require('./models/category')

sequelize.sync({force: false}).then(async () => {

    let cat1 = await Category.create({name: "category1", image: "imagen1", description: "description1"})
    let cat2 = await Category.create({name: "category2", image: "imagen2", description: "description2"})

})