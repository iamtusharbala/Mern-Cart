const express = require('express');
const connectDB = require('./connect');
const cors = require("cors");
const { Product } = require('./models/product');
const app = express()

const PORT = 3000;


// Connect to Database
connectDB()

// read body from request
app.use(express.json())

// Configuring CORS
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world..')
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}....`);
})


//Create a product
app.post('/create', async (req, res) => {
    try {
        const newProduct = new Product({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            discountPercentage: req.body.discountPercentage,
            rating: req.body.rating,
            stock: req.body.stock,
            brand: req.body.brand,
            category: req.body.category,
            thumbnail: req.body.thumbnail,
            images: req.body.images
        })

        await Product.create(newProduct);
        res.send('Product created to the database...')

    } catch (error) {
        console.error(error);
    }
})


//Get all products
app.get('/read', async (req, res) => {
    try {
        const productList = await Product.find();
        res.send(JSON.stringify(productList));

    } catch (error) {
        console.error(error);
    }
})

//Update a product based on the id
app.put("/update/:id", async (req, res) => {
    const product_id = req.params.id;
    await Product.findByIdAndUpdate(product_id, {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        discountPercentage: req.body.discountPercentage,
        rating: req.body.rating,
        stock: req.body.stock,
        brand: req.body.brand,
        category: req.body.category,
        thumbnail: req.body.thumbnail,
        images: req.body.images,
    });

    res.send("Product updated successfully!");
});


//Delete a product based on the id
app.delete("/delete/:id", async (req, res) => {
    const product_id = req.params.id;
    await Product.findByIdAndDelete(product_id);
    res.send("Product deleted!");
});