import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
const registerUser =asyncHandler( async  (req,res) =>{
   //req.body --json and from
   const {fullName, email, username, password } = req.body
   console.log("email: ", email);

//    if(fullName === "")
//         throw new ApiError(400,"full name is required")
if (
    [fullName,email,username,password].some((field) => 
        field?.trim() === "")
) {
    throw new ApiError(400,"All fields are required")
}

const existedUser =User.findOne({
    $or:[{ username } , { email }]
})

if (existedUser) {
    throw new ApiError(409,"Username and email already existing in database")
}

req.body

} )


export {registerUser}