function findSame (word)
{
    arr=word.split("");
        for(let i=arr.length-1; i >=0; i--)
            {
                var temp=0;
                for(let j=i;j>=0;j--)
                {
                    if (arr[i].match(/^[AIUEOaiueo]/) && arr[j].match(/[^AIUEOaiueo]/))
                    {
                        temp=arr[j];
                        arr[j]=arr[i];
                        arr[i]=temp;
                    }
                }
            }
            return arr.join("\n");
}

console.log(findSame("ARKADEMY"));
