/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const developers= arr.filter(employee => employee.profession == 'developer');
    console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee => {
        if(employee.profession === 'developer'){
            console.log(employee);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log("New employee added:",newEmployee);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const updatedArray = arr.filter(employee => employee.profession !=='admin');
    console.log("Array after removing admins:",updatedArray)
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray = [
        { id: 4, name: "Mike", age: "25", profession: "designer" },
        { id: 5, name: "Anna", age: "22", profession: "engineer" },
        { id: 6, name: "David", age: "30", profession: "manager" }
    ];
    const concatenatedArray = arr.concat(newArray);
    console.log("Concatenated array:", concatenatedArray);
  }