function thirdHighest(arr)
{
    
    if (typeof(arr)==="object"){
        if(arr.length<3){
            return "Minimal array length is 3";
        }
        else{
            for(let i=1; i < arr.length; i++)
            {
                var temp=0;
                for(let j=0;j<i;j++)
                {
                    if (arr[j]<arr[i])
                    {
                        temp=arr[j];
                        arr[j]=arr[i];
                        arr[i]=temp;
                    }
                }
            }
        return arr[2];
        }
    }
    else{
        return "Parameter should be an array!";
    }
}
console.log(thirdHighest([1,2,3,4,5,6]));
console.log(thirdHighest("Bukan array nih!"));
console.log(thirdHighest([1,2]));
console.log(thirdHighest([107,1,-4,'a','true',0,-77]));