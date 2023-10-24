const name = "darshit"
const repocount = 20


 //console.log(name+repocount+" value");
 console.log(`hello my name is ${name} and my repo count is ${repocount}`);

 const gamename = new String('darshit-dh')
 //console.log(gamename);

 console.log(gamename[0]);
 console.log(gamename.__proto__);

 console.log(gamename.length);
 console.log(gamename.toUpperCase());
 console.log(gamename.charAt(2));
 console.log(gamename.indexOf('t'));

const newstring = gamename.substring(0,4) 
console.log(newstring);

//const anotherstring = gamename.slice(-10,4)
//console.log(anotherstring);

const newstringone ="    hitesh   "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sunday'))

console.log(gamename.split('-'));
