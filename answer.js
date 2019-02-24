function VowelSquare(strArr) { 
    for(let i = 1; i < strArr.length; i++) {
          for(let j = 0; j < strArr[i].length; j++) {
              let search1 = /[aeiou][aeiou]/.exec(strArr[i].slice(j));
              let search2 = /[aeiou][aeiou]/.exec(strArr[i-1].slice(j));
              if(search1 !== null && search2 !== null && search1.index === search2.index ) {
                return (i-1).toString() + "-" +  (search2.index+j).toString();
              }
          }
    }
    return "not found"; 
  }
  VowelSquare(readline());