function stringChop(str, size) {
  // your code here
	if(!str){
		return[];
	}
	let chunk= [];
	for (let i =0;i<str.length; i=i+size) {
		chunk.push(str.slice(i, i+size))
	}
	return chunk;
}	
// Do not change the code below
const str=prompt("Enter String.");
const size =Number(prompt("Enter Chunk Size."));
alert(JSON.stringify(stringChop(str, size)));