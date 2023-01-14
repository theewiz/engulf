const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");
const lightmode = document.querySelector(".light-mode");
const darkmode = document.querySelector(".dark-mode");
const logoImg = document.querySelector(".logo-img");

// Open Sidebar
menu.addEventListener("click", function () {
  sidebar.style.display = "block";
});

// Close Sidebar
closeBtn.addEventListener("click", function () {
  sidebar.style.display = "none";
});

// Lightmode
lightmode.addEventListener("click", function () {
  lightmode.classList.add("active");
  darkmode.classList.remove("active");
  menu.style.color = "black";
  closeBtn.style.color = "black";
  document.body.classList.remove("dark-theme-variables");
  logoImg.style.color = "black";

});

// Darkmode
darkmode.addEventListener("click", function () {
  darkmode.classList.add("active");
  lightmode.classList.remove("active");
  lightmode.style.color = "white";
  menu.style.color = "white";
  closeBtn.style.color = "white";
  document.body.classList.add("dark-theme-variables");
  logoImg.style.color = "white";
});

// Orders
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${
          order.shipping === "Declined"
            ? "danger"
            : order.shipping === "Pending"
            ? "warning"
            : "primary"
        }">${order.shipping}</td>
        <td class="primary">Details</td>;`;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
