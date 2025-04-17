import { User } from "../model/user.model.js";


export const details = async (req, res) => {
    try{
        const{
            name, 
            age,
            birthday,
            email,
            phone,
        } = req.body;

        if (!name || !email || !age || !birthday || !phone ) {
            return res.status(400).json({message: 'All fields are required'})
        }

        const memberExists = await User.findOne({ email });
        if(memberExists) {
            return res.status(400).json({message: 'User already exists'})
        }

        const newMember = new User ({
            name,
            age,
            birthday,
            email, 
            phone,
        });

        await newMember.save();

        res.status(201).json({
            success: true,
            message: "Member Added successfully",
            user: {
              _id: newMember._id,
              email: newMember.email,
              name: newMember.name,
              age: newMember.age,
              birthday: newMember.birthday,
              phone: newMember.phone
    
            },
        });

    } catch(error) {
        res.status(400).json({success: false, message: error.message})
    }
}


export const getDetails = async (req, res) => {
    try {
      const { id } = req.params;
  
      const user = await User.findById(id);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({
        success: true,
        user: {
          _id: user._id,
          name: user.name,
          age: user.age,
          birthday: user.birthday,
          email: user.email,
          phone: user.phone,
        },
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  