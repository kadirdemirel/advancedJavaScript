//rest operatörü
//rest:geriye kalanlar anlamına gelir.
//c#:params java:varArgs

let showProducts = function (id, ...products) {
    console.log(id);
    console.log(products);
  };
  // console.log(typeof showProducts)
  
  // showProducts(10,"Elma","Armut","Karpuz",1,{id:1})
  
  //spread operatörü
  //ayrıştırmak demektir.
  
  let points = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(...points);
  console.log(Math.max(...points));
  
  console.log(..."ABC", "D", ..."EFG", "H");
  
  //rest ile parametreye istediğimiz kadar parametre gönderiyoruz array olarak tutuluyor ancak
  //spread ile elimizdeki değeri ayrıştırıyoruz.
  
  //Destructuring
  let populations = [10000, 20000, 30000, [40000, 50000]];
  let [small, medium, high, [veryHigh, maxiumum]] = populations; //destructuring
  console.log(small);
  console.log(medium);
  console.log(high);
  console.log(veryHigh);
  console.log(maxiumum);
  
  function someFunction([small1], number) {
    console.log(small1);
  }
  
  someFunction(populations);
  
  let category = { id: 1, name: "İçecek" };
  console.log(category["id"]);
  console.log(category.name);
  
  let { id, name } = category;
  console.log(id);
  console.log(name);
  