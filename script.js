const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  document.body.classList.toggle("nav-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const amount = document.querySelector("#monthly-amount");
const result = document.querySelector("#calculator-result");
const options = document.querySelectorAll("[data-amount]");

function updateCalculation(value) {
  const monthly = Number(value);
  if (!Number.isFinite(monthly) || monthly < 0) return;
  const total = monthly * 12;
  const contribution = monthly;
  result.textContent = `₹${total.toLocaleString("en-IN")} jewellery value, including ₹${contribution.toLocaleString("en-IN")} from GGJ`;
}

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((item) => item.classList.remove("selected"));
    option.classList.add("selected");
    amount.value = option.dataset.amount;
    updateCalculation(amount.value);
  });
});
amount?.addEventListener("input", () => updateCalculation(amount.value));
if (amount && result) updateCalculation(amount.value);
