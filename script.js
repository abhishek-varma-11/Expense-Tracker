const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addExpenseForm = document.querySelector(".addExpenseForm");
const totalContainer = document.getElementById("totalContainer");

let savedExpenses = localStorage.getItem("expenses");
let expenses = JSON.parse(savedExpenses) || [];
let nextId =
    expenses.length > 0
        ? Math.max(...expenses.map(expense => expense.id)) + 1
        : 1;
let editingExpenseId = null;

addExpenseForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);

    
    if (editingExpenseId === null) {
        let expenseId = nextId;
        if (name.length === 0 || Number.isNaN(amount) || amount <= 0) {
            alert("Invalid Data");
            return;
        }
        else {
            expenses.push({
                id: expenseId,
                name: name,
                amount: amount
            });
            nextId++;
            console.log(expenses);
        }
    }
    else {
        let expense = expenses.find(expense => {
            return expense.id === editingExpenseId;
        });
        expense.name = name;
        expense.amount = amount;
        editingExpenseId = null;
    }

    saveExpsenses();
    renderExpenses();
    updateTotal();

    expenseName.value = "";
    expenseAmount.value = "";

});

function updateTotal() {

    let total = expenses.reduce((sum, expense) => {
        sum += expense.amount;
        return sum;
    }, 0);

    totalContainer.textContent = `Total : ₹${total}`;
    console.log(total);

}

function saveExpsenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function renderExpenses() {

    const expenseList = document.getElementById("listOfExpenses");
    expenseList.innerHTML = "";

    expenses.forEach(expense => {
        const row = document.createElement("tr");
        const id = document.createElement("td");
        const nameCell = document.createElement("td");
        const amountCell = document.createElement("td");
        const deleteEditCell = document.createElement("td");
        const deleteBtn = document.createElement("button");
        const editBtn = document.createElement("button");

        id.textContent = expense.id;
        nameCell.textContent = expense.name;
        amountCell.textContent = expense.amount;
        deleteBtn.textContent = "Delete";
        editBtn.textContent = "Edit";

        deleteBtn.addEventListener("click", () => {
            expenses = expenses.filter((currentExpense) => {
                return currentExpense.id !== expense.id;
            });

            saveExpsenses();
            renderExpenses();
            updateTotal();
        });

        editBtn.addEventListener("click", () => {
            expenseName.value = expense.name;
            expenseAmount.value = expense.amount;
            editingExpenseId = expense.id;
            console.log(editingExpenseId);
        });

        row.appendChild(id);
        row.appendChild(nameCell);
        row.appendChild(amountCell);
        deleteEditCell.appendChild(editBtn);
        deleteEditCell.appendChild(deleteBtn);
        row.appendChild(deleteEditCell);
        expenseList.appendChild(row);
    });
}

renderExpenses();
updateTotal();

