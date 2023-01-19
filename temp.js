const userList = [
    {name : "Rahul" , age : 22},
    {name : "Rani" , age : 18},
    {name : "Sarthak" , age : 9},
    {name : "Shivansh" , age : 6}
]


//const names = userList.map(user=> user.name)
//console.log(names);

//let namesall="";

// userList.forEach(user=>{
//     namesall = namesall + "," + user.name;
// })

// console.log(namesall);

const avg = userList.reduce((avg , curr)=> avg + parseInt(curr.age) ,0)

console.log(avg/userList.length);
