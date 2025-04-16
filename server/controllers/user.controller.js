import { User } from "../model/user.model";


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