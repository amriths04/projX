ProjX

A youtube based project

-[Model](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

chai-backend -----> projX


use .js while importing


Steps For Registering User


get user details from frontend
 validation - not empty
 check if user already exists: username, email
  check for images, check for avatar
 upload them to cloudinary, avatar
 create user object - create entry in db
 remove password and refresh token field from response
 check for user creation
 return res