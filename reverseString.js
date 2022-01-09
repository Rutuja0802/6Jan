
//Q.Reverse only words in string 

function reverse(str) 
{ 
    // get size of string 
    let n = (str).length;
    let i; 
    let arr = str.split('');
    for (i = 0; i < n/2; i++)
    {
        let temp = arr[i];
        arr[i] = arr[n-i-1];
        arr[n-i-1] = temp;
    }
    return arr.join('');
} 

// Driver program to test above functions 
let str = "abc"; 
str = reverse(str); 
console.log("Reversed string is-> " +str); 
