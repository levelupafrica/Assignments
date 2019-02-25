function VowelSquare(strArr) { 
  for (i = 0; i < strArr.length-1; i++){
    for(j = 0; j < strArr[0].length-1; j++){
      if (strArr[i][j].match(/a|e|i|o|u/) && strArr[i][j+1].match(/a|e|i|o|u/) && strArr[i+1][j].match(/a|e|i|o|u/) && strArr[i+1][j+1].match(/a|e|i|o|u/)) { 
      return res = i+"-"+j }
    }
  }
  return "not found"
  }
  VowelSquare(readline());