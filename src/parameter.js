export function vowels(str){
    let num=0;
    let strLower=str.toLowerCase();
    for (let i=0 ;i<=str.length;i++){
        if( strLower[i]=='a' ||
            strLower[i]=='e' || 
            strLower[i]=='i' || 
            strLower[i]=='o' || 
            strLower[i]=='u'
            ){
            console.log(str[i]);
            num +=1;
            }
    }
    return num;
}