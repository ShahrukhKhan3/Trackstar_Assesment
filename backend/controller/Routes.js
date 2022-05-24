const express = require("express");
const router = express.Router();
const Product =require('../modal/Scehma');
router.get('/products', async (req, res)=>{
  try{
    const product= await Product.find();
    res.status(200).json({
      status: true,
      product:product
    })
  }catch (error){
    res.status(500).json({
      message:'Internal server error',
      error: error,
      status: false
    })
  }
})
router.post('/new-product', async(req,res)=>{
  console.log(req.body);
  const product= new Product({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price
  })
  try{
    const productsave = await product.save();
    res.status(200).json({
      message:'data saved successfully',
      status: true
    })
  }catch (error){
    res.status(500).json({
      message:'Internal server error',
      error: error,
      status: false
    })
  }

  });

  router.put('/products/:id', async (req, res) => {
    console.log(req.params)
    console.log(`updating product ${req.params.id} with ${JSON.stringify(req.params.id)}`);
    try{
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.send(product);
    } catch(err){
      console.log(err);
      res.send({'error': err.message});
    }
  })
  router.delete('/products/:id', async (req, res) => {
    try{
      const product = await Product.findByIdAndDelete(req.params.id);
      res.send(product);
    } catch(err){
      console.log(err);
      res.send({'error': err.message});
    }
  });
  module.exports = router;