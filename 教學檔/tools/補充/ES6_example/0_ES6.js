1. 陳述式(statement)和表達式(expression)
   - 陳述式
        if(){}
        while(){}
        switch(){}
        break;
        continue;
        ......
   - 表達式
        5 > 3
        n
        5 + 3 * 4
---------------------------------------
2. var | let | const
  (1) scope
      for(var i = 0; i < 5; i++){
          console.log(i);
      }
      console.log(i);
      結果:
      0
      1
      2
      3
      4
      5
      ---------------------------
      for(let j = 0; j < 5; j++){
          console.log(j);
      }
      console.log(j);
      結果:
      0
      1
      2
      3
      4
      Uncaught ReferenceError: j is not defined

  (2) hosting
      test();   //先呼叫函數
      function test(){ ... }  //補宣告
      ---------------------------
      temp += 1;
      var temp = 10;
      ---------------------------
      但是，let 和 const 不能先執行再補宣告

  (3) const 宣告的變數不能被 reassigned
      const d = 100;
      d = 50;  // Uncaught TypeError: Assignment to constant variable.
      ---------------------------
      const e = {
           x: 5,
           y: 10,
      };
      e.x = 100;  // 可以

      console.log(e);   //{x: 100, y: 10}
---------------------------------------
3. object shorthand 物件縮寫
  (1) 屬性縮寫
    function circle(x,y,r){
        return {
            x: x,
            y: y,
            r: r,
        };
    }
    ↓↓↓↓↓↓↓↓↓↓↓↓↓
    function circle(x,y,r){
        return {
            x,
            y,
            r,
        };
    }
    呼叫: let ans = circle(100,100,150)
    ---------------------------
    function createObject(key, value){
        let obj = {};    // let obj = new Object();
        obj[key] = value;

        return obj;
    }
    呼叫: let man = createObject('name','Peter')
    執行: man
    結果: {name: 'Peter'}
    ---------------------------
    呼叫: let dog = createObject('legs',4)
    執行: dog
    結果: {legs: 4}
    ---------------------------
    # 屬性可以計算
    function createObject(key, value){
        let obj = {
            // [key]: value, 
            [key+1]: value,
        };

        return obj;
    }
    呼叫: let baby = createObject('name','YoYo')
    執行: baby
    結果: {name1: 'YoYo'}
    ---------------------------
    呼叫: let cat = createObject('legs',4)
    執行: cat
    結果: {legs1: 4}

  (2) 函數縮寫
    let man = {
        name: 'Peter',
        age: 40,
        gender: 'male',
        //sayHello:function(){
        //    alert('Hello')
        //},
        sayHello(){
            alert('Hello')
        },
    };
---------------------------------------
4. destructuring assignment 解構賦值
  (1) 陣列解構
    let numArray = [1,3,5,7,9];
    let first = numArray[0];
    let second = numArray[1];
    let third = numArray[2];

    呼叫: first
    結果: 1

    ↓↓↓↓↓↓↓↓↓↓↓↓↓
    let numArray = [1,3,5,7,9];
    let [first,second,third,fourth,fifth] = numArray;

    呼叫: first
    結果: 1

    ↓↓↓↓↓↓↓↓↓↓↓↓↓
    let numArray = [1,3,5,7];
    let [first,second,third,fourth,fifth] = numArray;

    呼叫: fifth
    結果: undefined

    呼叫: first+second+third+fourth+fifth
    結果: NaN
    ----------------------------------
    # 給予預設值
    let numArray = [1,3,5,7];
    let [first,second,third,fourth,fifth=100] = numArray;

    呼叫: fifth
    結果: 100
    ----------------------------------
    # 忽略部分元素
    let numArray = [1,3,5,7];
    let [,second] = numArray;   // 只想取第二個值

    呼叫: second
    結果: 3
    ----------------------------------
    # swap
    let x = 5, y = 10;
    [x,y] = [y,x];
    ----------------------------------
    # 剩下的部分
    let numArray = [1,3,5,7];
    let [arr,...others] = numArray; // ...(three dots --> rest operator)

    呼叫: arr
    結果: 1
    呼叫: others
    結果: [3,5,7]

  (2) 物件解構
    let circle = {
        x: 100,
        y: 200,
        r: 150,
    };
    let x = circle.x;
    let y = circle.y;
    let r = circle.r;

    ↓↓↓↓↓↓↓↓↓↓↓↓↓
    let circle = {
        x: 100,
        y: 200,
        r: 150,
    };

    let {x,y,r} = circle;
    let {x,y,r,z=500} = circle;

  (3) 函數解構
    let circle = {
        x: 100,
        y: 200,
        r: 150,
    };

    function drawCircle() {
        return Math.sqrt(circle.x * circle.x + circle.y * circle.y);
    }

    呼叫: drawCircle()
    結果: 223.60679774997897

    ↓↓↓↓↓↓↓↓↓↓↓↓↓
    let circle = {
        x: 100,
        y: 200,
        r: 150,
    };

    function drawCircle({x,y}) {
        return Math.sqrt(x * x + y * y);
    }

    呼叫: drawCircle(circle)
    結果: 223.60679774997897

    ↓↓↓↓↓↓↓↓↓↓↓↓↓
    let circle = {
        x: 100,
        y: 200,
        r: 150,
    };

    function drawCircle({x=123,y=456}) {
        return Math.sqrt(x * x + y * y);
    }

    呼叫: drawCircle(circle)
    結果: 223.60679774997897


---------------------------------------
5. string template 字串模板 (使用反引號 backtick)
    (1) 字串串接
          let name = 'Peter'; 
          console.log('Hello, ' + name);
          console.log(`Hi, ${name} ~~`);

    (2) 插入表達式         
          function sayHello(name,days) {
              console.log(`Hello, ${name} ~~ It has been ${days * 24 * 60} mintues.`);
          }
          呼叫: sayHello('Peter',3)
          結果: Hello, Peter ~~ It has been 4320 mintues.

          ↓↓↓↓↓↓↓↓↓↓↓↓↓
          function sayHello(name,days) {
              console.log(`Hello, ${name} ~~ ${(days > 7) ? 'It has been a long time sinse I saw you last.' : ''}`);
          }
          呼叫: sayHello('Peter',3)
          結果: Hello, Peter ~~

          呼叫: sayHello('Sally',8)
          結果: Hello, Sally ~~ It has been a long time sinse I saw you last.

    (3) 多行字串
          let longString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus doloribus itaque nobis accusamus ut? Accusantium veniam repellendus dolore exercitationem consectetur!';
          
          let longString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' + 
          'Ducimus doloribus itaque nobis accusamus ut? Accusantium veniam repellendus ' + 
          'dolore exercitationem consectetur!';

          let longString = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Ducimus doloribus itaque nobis accusamus ut? Accusantium veniam repellendus 
          dolore exercitationem consectetur!`;

---------------------------------------
6. arrow function 箭頭函數 (用更簡短的方式來宣告和定義函數)
    函數傳遞一個參數，不用加小括號    
    函數不傳參數或傳遞不只一個參數，一定要加小括號 
    傳回值的敘述只有一行，可以省略大括號，也可以省略 return
    numArray.map(function(data,num){
        return data * num;
    });
    ↓↓↓↓↓↓↓↓↓↓↓↓↓
    numArray.map((data,num) => data * num);
    ----------------------------------
    # 自動綁定
      一般的JS context(情境): this代表執行當下的外層物件，所以 this 在執行當下才有意義
      function test(){
          console.log(this);
      }
      呼叫: test()
      結果: window 物件

      let man = {
          name: 'Peter',
          sayHello(){
              console.log(this);
          }
      }
      呼叫: man.sayHello()
      結果: man 物件
    ----------------------------------

      只要寫成 arrow function，內部的 this 和外部的 this 相同

      let ans = () => console.log(this);
      console.log(this)

---------------------------------------
7. spread | rest operator 
   spread operator -- 見補充的程式 4_spreadOperator.html
---------------------------------------
8. classes 建立 -- 見補充的程式 5_classes.html
---------------------------------------
9. inheritance 繼承(為了程式碼再利用)  -- 見補充的程式 6_inheritance.html
---------------------------------------
10. 關於 import 和 export   -- 見補充的程式 7_import_export.html
