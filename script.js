function firstNonRepeatedChar(str) {
  let count = {};
  for(let I = 0; I < str.length; I++){
    let char = str[I];
    if(count[char] === undefined){
      count[char] = 1;
    }
    else{
      count[char] = count[char] + 1;
    }
  }
for(let I = 0; I < str.length; I++){
  if(count[str[I]] === 1){
    return str[I];
  }
}
return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

