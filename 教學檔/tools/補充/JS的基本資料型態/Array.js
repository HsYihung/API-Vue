1 建立陣列
  let arr = [];
  let arr = new Array();

  let arr = [2,4,6,'ABC',true,new Date()];
  let arr = new Array(2,4,6,'ABC',true,new Date());

2 如何存取
  console.log(arr[0]); ---> 2

  for(let i = 0; i < arr.length; i++){
      console.log(arr[i]);
  }

  for(let i in arr){
      console.log(arr[i])
  }

3 屬性: length
4 方法:
    - 新增刪除在前端
      unshift(item) | shift()

    - 新增刪除在後端
      push(item) | pop()
      
    - 新增刪除在任意端
      splice(index)  刪除
      splice(3)  將index 3 以及之後的全部刪除

      splice(index,筆數)  刪除
      splice(3,1)  刪除index 3 這一筆

      splice(index,筆數,100,200,300)  刪除，也可以新增

    - 陣列組合成字串
      join()

    - 尋找 index
      indexOf() | lastIndexOf() 

    - concat()
    - reverse()
    - sort()

    - filter(function(data){return 符合篩選條件的資料})
    - map(function(data){return 逐個處理完之後的結果})
    - reduce(function(accmulator,data){return 逐個處理，每次處理的結果放進累計器中})
    


