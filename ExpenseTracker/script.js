 // Grab DOM elements
const form = document.getElementById("expenseForm");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const list = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");
const filterCategory = document.getElementById("filterCategory");
const clearAllBtn = document.getElementById("clearAllBtn");


let expenses = [];

// ✅ Save to localStorage
function saveToLocalStorage() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// ✅ Load from localStorage on startup
window.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem("expenses");
  if (stored) {
    expenses = JSON.parse(stored);
    renderExpenses();
  }
});
clearAllBtn.addEventListener("click", () => {
  const confirmClear = confirm("Are you sure you want to delete all expenses?");
  if (confirmClear) {
    expenses = [];
    saveToLocalStorage();
    renderExpenses();
  }
});


// ✅ Form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;
  const date = dateInput.value;

  if (title === "" || isNaN(amount) || amount <= 0 || !category || !date) {
    alert("Please fill out all fields correctly.");
    return;
  }
const keywords=titleInput.value.toLowerCase();
const filtered=expense.filter(exp=>exp.title.toLowerCase().includes(keyword));
  const expense = {
    id: Date.now(),
    title,
    amount,
    category,
    date
  };

  expenses.push(expense);
  saveToLocalStorage();
  renderExpenses();

  // Clear form
  titleInput.value = "";
  amountInput.value = "";
  categoryInput.value = "";
  dateInput.value = "";
});

// ✅ Render expense list
function renderExpenses() {
  list.innerHTML = "";
  let total = 0;
  const selectedCategory = filterCategory.value;

  const filtered = expenses.filter((exp) =>
    selectedCategory === "All" || exp.category === selectedCategory
  );

  filtered.forEach((exp) => {
    total += exp.amount;
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${exp.title}</strong> - $${exp.amount.toFixed(2)}
      <br>
      📅 ${exp.date} | 🏷️ ${exp.category}
      <button onclick="deleteExpense(${exp.id})">❌</button>
    `;
    list.appendChild(li);
  });

  totalDisplay.textContent = total.toFixed(2);
}

// ✅ Delete function
function deleteExpense(id) {
  expenses = expenses.filter((exp) => exp.id !== id);
  saveToLocalStorage();
  renderExpenses();
}

// ✅ Filter by category
filterCategory.addEventListener("change", renderExpenses);

//listning to user input
titleInput.addEventListener("input",renderExpenses);
