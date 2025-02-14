import User from '../model/user.model.js'
import bcrypt from 'bcrypt'
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            res.status(400).json({ message: "User Already Exists!!" });
        }else{

        const hashedPass = await bcrypt.hash(password, 10);
        console.log(hashedPass)

        const createUser = new User({ fullname, email, password: hashedPass });
        await createUser.save();
        const users ={fullname:fullname,email:email}
        res.status(201).json({ message: "User Created Successfully", users});
        }
    } catch (error) {
        console.log("error" + error.message);
        res.status(500).json({ message: "Internal Server Error !!" });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email });
        const Ismatched = await bcrypt.compare(password, user.password);
        if (!user || !Ismatched) {
            res.status(400).json({ message: "Invalid Username or Password" });
        } else {
            res.status(201).json({
                message: "Logined Successfully", user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            });

        }
    } catch (error) {
        console.log("error:" + error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}