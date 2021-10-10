const meterReader = require('../models/meterraeding')

const meterReaderCtrl = {
    
    createmeter: async(req, res)=>{
        try{
            const {meter, images} = req.body;

            
            const newMeterReading = new meterReader({
                   meter, images
            })
            await newMeterReading.save()
            res.json({msg: "Created a meterreading"})
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    }
    
}

module.exports = meterReaderCtrl