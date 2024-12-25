exports.getProducts = (req,res,next) =>{
    res.json({
        success: true,
        message: 'Successs working'
    })
}

exports.getSingleProduct = (req,res,next) => {
    res.json({
        success: true,
        message: 'Get single product is working'
    })
}