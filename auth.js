const register=function(username){
    console.log(`user ${username} has been registered`)
}

const login=function(username,password){
console.log(`user ${username}is logged in`)
}

// module.exports={register,id}
// module.exports=register; //chalega
// module.exports=login//nahi chalega

module.exports={ //chalega 
    register, 
    login
}
// module.exports={//chalega
//     register:"register",
//     login:"login"
// }
