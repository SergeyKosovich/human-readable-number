module.exports = function toReadable (a) {
    let one=["zero", "one", "two",   "three", "four",
    "five", "six", "seven", "eight", "nine" ]
    let double=[   "ten",  "eleven",  "twelve",
    "thirteen",  "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"  ]
    let multi=[  "",       "",        "twenty",
    "thirty", "forty",   "fifty",
    "sixty",  "seventy", "eighty",
    "ninety" ]
    let mega=[ "hundred", "thousand" ]
    let arr=a.toString().split('');
    let end=[];
    let arr2;
     
    if(a>99){
      arr2= ( +`${arr[arr.length-2]}${arr[arr.length-1]}`).toString().split('')
    }else(arr2=a.toString().split(''))
    if(arr2.length===1){
     end.unshift(one[arr2[0]])
 }

 if(arr2.length===2){
    if(arr2.join('')<20){   end.unshift(double[arr2[1]] )}
 }

 if(arr2.join('')>=20&&arr2.join('')<100){
     if(one[arr2[1]]==="zero"){end.unshift(multi[arr2[0]])}else{
       end.unshift(one[arr2[1]]);
       end.unshift(multi[arr2[0]]);
   }
 }
 
 if(a>=100){
  
   
   if(+arr[arr.length-3]===0){}else{
     if(+arr2.join('')===0){end.pop()}
     end.unshift(mega[0]);
     end.unshift(one[arr[arr.length-3]]);
 
   }

 }




 let thous=arr.slice();
 thous.splice(thous.length-3,3)

 let arr3;
 let end2=[];
 
 if(a>=1000){
     
     if(+thous.join('')>99){
       arr3= ( +`${thous[thous.length-2]}${thous[thous.length-1]}`).toString().split('')
     }else{(arr3=thous)}
  

  if(thous.length===1){
      end2.unshift(mega[1]);
      end2.unshift(one[arr3[0]]);
      
    
  }

  if(thous.length===2){
     if(arr3.join('')<20){ 
       end2.unshift(mega[1]);
       end2.unshift(double[arr3[1]]);
       }

       
  }


  if(+arr3.join('')>=20&&+arr3.join('')<100){
  
      if(one[arr3[1]]==="zero"){
        end2.unshift(mega[1]);
        end2.unshift(multi[arr3[0]]);
        
      
     }else{
        end2.unshift(mega[1]);
        end2.unshift(one[arr3[1]]);
        end2.unshift(multi[arr3[0]]);
        
    }
  }





 }

let z=[];
if(end2.length>0){
end2.forEach(item=>z.push(item))
}
if(end.length>0){
end.forEach(item=>z.push(item))
}
return z.join(' ')


}

