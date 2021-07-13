import Formdata112 from '../models/form112.js'
import Formdata113 from '../models/form113.js'
export const formoneonetwo =  async (req,res) => {

 const {
    department,
    progCode,
    progName,
    introYear,
    cbcs,
    yearCBCS,
    yearRev,
    revPercent,
 
 } = req.body
 const data  = new Formdata112 ({
    department,
    progCode,
    progName,
    introYear,
    cbcs,
    yearCBCS,
    yearRev,
    revPercent,
   
 })
 try{
     await data.save();
     res.send('Inserted Data')
 }catch (err){
     console.log(err);
 }
}

export const formoneonethree =  async (req,res) => {
    
    const {
       department,
       progCode,
       progName,
       introYear,
       activities,
       yearcbcs,
       intro,
    } = req.body
    const data  = new Formdata113 ({
       department,
       progCode,
       progName,
       introYear,
       activities,
       yearcbcs,
       intro,
    })
    try{
        await data.save();
        res.send('Inserted Data')
    }catch (err){
        console.log(err);
    }
   }
   

