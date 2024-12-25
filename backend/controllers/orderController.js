const orderModel = require('../models/orderModel')

exports.createOrder = (req,res,next) => {
    try {

        const cartItems = req.body;
        const amount = Number(cartItems.reduce((acc,item)=>(acc+item.product.price * item.qty),0)).toFixed(2);
        console.log(amount,'AMOUNT')
        res.json({
            success: true,
            message: 'This is working'
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
   
}