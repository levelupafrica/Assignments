function VowelString(strArr){
    strArr = ["abcd", "eikr", "oufj"];

    if(typeof strArr !== 'object'){
        return `{error: vowel not found}`;
    };

    for (let i = 0; i < strArr.length; i++){
        return strArr.indexOf('abcd');
    }
    return strArr;
};
console.log(VowelString());
