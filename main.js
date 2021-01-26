// login button event handler
const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", function(event) {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none"; 
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
})

// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(event) {
  const depositNumber = getInputNumber("depositAmount");

  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";
})

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(event) {
  const withdrawNumber = getInputNumber("withdrawAmount");

  updateSpanText("currentWithdraw", withdrawNumber);
  updateSpanText("currentBalance", -1 * withdrawNumber);

  document.getElementById("withdrawAmount").value = "";
})


function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const total = currentNumber + depositNumber;
  document.getElementById(id).innerText = total;
}

function getInputNumber(id) {
  return parseFloat(document.getElementById(id).value);
}
