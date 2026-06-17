const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addExpenseForm = document.querySelector(".addExpenseForm");
const totalContainer = document.getElementById("totalContainer");

let savedExpenses = localStorage.getItem("expenses");
let expenses = JSON.parse(savedExpenses) || [];

addExpenseForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);

    let nextId =
        expenses.length > 0
            ? Math.max(...expenses.map(expense => expense.id)) + 1
            : 1;
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
        nextId += 1;
        console.log(expenses);
    }

    saveExpsenses();
    renderExpenses();
    updateTotal();

    expenseName.value = "";
    expenseAmount.value = "";

});

function updateTotal() {

    let total = expenses.reduce((sum, expense) => {
        sum += expense.Amount;
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
        const deleteCell = document.createElement("td");
        const deleteBtn = document.createElement("button");

        id.textContent = expense.id;
        nameCell.textContent = expense.Name;
        amountCell.textContent = expense.Amount;
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            expenses = expenses.filter((currentExpense) => {
                return currentExpense.id !== expense.id;
            });

            saveExpsenses();
            renderExpenses();
            updateTotal();
        });

        row.appendChild(id);
        row.appendChild(nameCell);
        row.appendChild(amountCell);
        deleteCell.appendChild(deleteBtn);
        row.appendChild(deleteCell);
        expenseList.appendChild(row);

    });
}

renderExpenses();
updateTotal();

