1 建立 Object
  let obj = {};
  let obj = new Object();

  let man = {
      name: 'Peter',
      age: 40,
      gender: 'male',
      favoriateColor: ['black','white','gray'],
      car: {
          make: 'BMW',
          mode: 'X5',
          year: 2020,
      },
      retired: false,
    //   sayHello: function(){},  //ES5
      sayHello(){
          console.log('Hello');
      },
  };

  let products = {
      10: 'Hat',
      20: 'T-shirt',
      30: 'iPad',
      40: 'iPhone',
      50: 'AirPods',
  };
  console.log(products.10);   //X
  console.log(products[10]);   // Hat

2 如何存取
    man.name ---> Peter
    man.favoriateColor[0] ---> black
        物件的陣列表示法: man['favoriateColor'][0] ---> black
    man.car.mode ---> X5
        物件的陣列表示法: man['car']['mode']  ---> X5
    man.sayHello()

    for(let key in man){
        console.log(key);    //冒號左邊的 key 值
        console.log(man[key]);    //冒號右邊的 value 值
    }

