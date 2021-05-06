const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();                                                                                                            

router.get('/', (req, res, next) => {
  // res.send("demo");
   res.render("demo");
});
//router.post('/', function (req, res) {
  //res.send(req.body);
//})
mongoose.connect("mongodb+srv://admin:admin@cluster0.7b4qe.mongodb.net/ProductDB",
{ useNewUrlParser: true, useUnifiedTopology: true });

const productDBSchema = {
 pid:String,
  pname:String
};

const product = mongoose.model("product",productDBSchema);
router.post('/',(req,res)=>{
 // console.log("loggg" + res.json(req.body.pname));
  let newProduct = new product(
    {
      pid:req.body.pid,
      pname:req.body.pname

    }
  );
  newProduct.save();

});



module.exports = router;




