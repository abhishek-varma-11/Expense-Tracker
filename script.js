console.log("JS Loaded");
let expenseName = document.getElementById("expenseName");
let expenseAmount = document.getElementById("expenseAmount");
let addExpenseForm = document.querySelector(".addExpenseForm");
let nextId = 1;
let expenses = []
addExpenseForm.addEventListener("submit",(event) => {
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const expenseId = nextId;

    if(name.length === 0 || Number.isNaN(amount) || amount <= 0){
        alert("Invalid Data");
        return;
    }
    else{
        expenses.push({
            id : nextId,
            Name : name,
            Amount : amount
        });
        nextId += 1;
        console.log(expenses);
    } 
    const expenseList = document.getElementById("listOfExpenses");

    const row = document.createElement("tr");
    const id = document.createElement("td");
    const nameCell = document.createElement("td");
    const amountCell = document.createElement("td");
    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");

    deleteBtn.addEventListener("click", () => {
        console.log("Delete Clicked")

        const rowToDelte = deleteBtn.parentElement.parentElement;
        expenses = expenses.filter((expense) =>{
            return expense.id != expenseId;
        })

        console.log(rowToDelte);

        rowToDelte.remove();

    })

    id.textContent = expenseId;
    nameCell.textContent = name;
    amountCell.textContent = amount;
    deleteBtn.textContent = "Delete";
    
    row.appendChild(id);
    row.appendChild(nameCell);
    row.appendChild(amountCell);
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);
    expenseList.appendChild(row);

    expenseName.value = "";
    expenseAmount.value = "";
});


