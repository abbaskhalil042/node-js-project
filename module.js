//*core module

// const color=require('cli-color');
// console.log(color.yellow("hello node js"))

//*local module

// const auth=require('./auth')
// auth.register("abbas")//because it was object
// auth.login("abbas", "secret")//because it was object

//*let's continue core module

//^ 1) path

const path = require("path");

//! dirname - folder path which is current folder name
// console.log("only dirname   ",__dirname);
// console.log(__filename)
// console.log("folder name ",path.dirname(__filename))

// !__filename - file path
// console.log("file name ",path.basename(__filename))

//!extention
// console.log("extension of the file ",path.extname(__filename));

//!parse
// console.log("parse the file name ",path.parse(__filename));//break the folder name into object

//!join
// console.log("joining two string ",path.join("/home","user"));//join folder like /home/user/app.js

//^fs - file system

const fs = require("fs");

//!mkdir(where to make , what to make)

// fs.mkdir(path.join(__dirname,"/test"),(err)=>{
//     if(err){
//         console.log("error in making folder ",err)
//         return ;
//     }
//     console.log("folder created .....")
// })

//!file creat
// fs.writeFile(path.join(__dirname,"test","test.txt"),"hello node from text.txt\n",(err)=>{
//     if(err){
//         throw err;
//     }

//     fs.appendFile(path.join(__dirname,"test","test.txt"),"more data or updated",(err)=>{
//         if(err)
//         {
//             throw err
//         }
//         {
//             console.log("data added ")
//         }
//     })
//     console.log("file created");
// })

//!read file
// fs.readFile(path.join(__dirname, "test", "test.txt"), "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   {
    // console.log(data)//buffer data dega
    // console.log("data from file ",data.toString());
//     console.log(data)//now it will give original data because of 'utf-8'
//   }
// });


//!os module
const os = require('os');

// console.log(os.type())
// console.log(os.platform())//same as type in mac
// console.log(os.arch())//cpu architecture
// console.log(os.cpus())//cpu details

// console.log(os.freemem())//free memory in bytes

// console.log(os.totalmem())//total memory in bytes

// console.log(os.uptime())//kab restart hua



//!events 
//*I'll se later
const emitter=require('events');


const myEmitter=new emitter()

//event
myEmitter.on("somename",(data)=>{
console.log(data)
})

//listening event
myEmitter.emit("somename",{
    name:"Abbas"
})



