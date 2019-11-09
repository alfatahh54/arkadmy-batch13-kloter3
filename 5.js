function createMatrix(angka)
{
  var arr=[];
  var arr2=[];
  var entri=0;
  var total=0;
  for(let i=0;i<angka;i++)
  {
    for(let j=0;j<angka;j++)
    {
      entri++;
      arr[j]=entri;
    } 
    total=total+arr[i]+arr[angka-1-i];
    arr2[i]=arr.join(" ")
  }
  return arr2.join("\n")+"\nTotal= "+total;
}
console.log(createMatrix(4));