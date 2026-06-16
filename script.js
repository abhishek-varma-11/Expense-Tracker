console.log("JS Loaded");
let expenseName = document.getElementById("expenseName");
let expenseAmount = document.getElementById("expenseAmount");
let addExpenseForm = document.querySelector(".addExpenseForm");
addExpenseForm.addEventListener("submit",(event) => {
    event.preventDefault();
    if(expenseName.value.trim().length == 0 || expenseAmount == NULL || expenseAmount == 0){
        alert("Invalid Data")
    }
    else{
        console.log(expenseName.value);
        console.log(expenseAmount.value);
    } 
})
