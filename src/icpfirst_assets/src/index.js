import { icpfirst } from "../../declarations/icpfirst";

document.querySelector("form#deposit").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const amount = document.getElementById("deposit-amount").value.toString();

  button.setAttribute("disabled", true);

  const newAmount = await icpfirst.deposit(Number.parseInt(amount));

  button.removeAttribute("disabled");

  document.getElementById("balance").innerText = newAmount;

  return false;
});

document.querySelector("form#withdraw").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const amount = document.getElementById("withdraw-amount").value.toString();

  button.setAttribute("disabled", true);

  const newAmount = await icpfirst.withdraw(amount)

  button.removeAttribute("disabled");

  document.getElementById("balance").innerText = newAmount;

  return false;
});
