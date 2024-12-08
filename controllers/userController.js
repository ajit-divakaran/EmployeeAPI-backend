const users = require("../models/userModel");

exports.getUserController = async (req, res) => {
  try {
    const employees = await users.find()
    res.status(200).json(employees);
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.addUserController = async(req,res)=>{
    const {firstName,age,email,status} = req.body
    try {
        const existinguser = await users.findOne({firstName,email})
        if(existinguser){
            res.status(406).json('user Already exists')
        }
        else{
            const newUser = new users({
                firstName,
                age,
                email,
                status
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
        
    } catch (error) {
        res.status(401).json(error)
    }

}

exports.editUserController = async(req,res)=>{
    const {firstName,age,email,status,id} = req.body
    console.log(req.body)
    try {
 

            // const updatedUser = await users.findOneAndUpdate( {id}, { $set: req.body },{ new: true} );
            const updatedUser = await users.findByIdAndUpdate(id,req.body,{new:true});
            if (updatedUser) {
                res.status(200).json(updatedUser);
              } else {
                res.status(404).json('User not found');
              }

    } catch (error) {
        res.status(401).json(error)
    }
}
exports.deleteUserController = async(req,res)=>{
    const {firstName,email} = req.body
    try {
 
        console.log(firstName,email)
        const deletedUser = await users.findOneAndDelete({ firstName, email });

        if (deletedUser) {
          res.status(200).json("User deleted successfully");
        } else {
          res.status(404).json("User not found");
        }
    } catch (error) {
        res.status(401).json(error)
    }
}
