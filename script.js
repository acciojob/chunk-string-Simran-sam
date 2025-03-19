function stringChop(str, size) {
  // your code here
	if(!str){
		return[];
	}
	
	let ar=[];
	for (let i = 0; i < str.length; i=i+size) {
		let chunk=str.slice(i,i+size);
		ar.push(chunk);
	}
	return ar;
}
// Do not change the code below
const str=prompt("Enter String.");
const size =Number(prompt("Enter Chunk Size."));
alert(JSON.stringify(stringChop(str, size)));