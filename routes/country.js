let express = require("express");
let router = express.Router();
let country = require("../models/country");
const { createError } = require("../utils/helpers");

router.post("/country", async (req, res, next) => {
    try{
        let code = req.body.country;
        let c = await country.findOne({where: {code: code}})
        if(c === null){
            throw (createError("Country Not found", 404))
        }
        let data = {
            country: {
                name: c.name,
                native: c.native,
                capital: c.capital,
                currency: c.currency,
                languages: JSON.parse(c.languages)
            }
        }
        return res.status(200).json({
            data: data
        })
    }
    catch(err){
        next(err);
    }
    
})

module.exports = router;