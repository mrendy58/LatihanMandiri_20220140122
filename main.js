document.addEventListener("DOMContentLoaded", function () {
    // Order Now button clicks
    const orderButtons = document.querySelectorAll(".btn-order");
    orderButtons.forEach((button) => {
        button.addEventListener("click", function () {
        const product = button.getAttribute("data-product");
        document.getElementById("orderProduct").value = product;
        document
            .getElementById("order-form")
            .scrollIntoView({ behavior: "smooth" });
        });
    });
    
    // Form submission
    document
        .getElementById("orderForm")
        .addEventListener("submit", function (event) {
        event.preventDefault();
            
        const name = document.getElementById("orderName").value;
        const email = document.getElementById("orderEmail").value;
        const phone = document.getElementById("orderPhone").value;
        const quantity = document.getElementById("orderQuantity").value;
        const product = document.getElementById("orderProduct").value;
        const orderDate = document.getElementById("orderDate").value;
        const agreement = document.getElementById("orderAgreement").checked
            ? "Agreed"
            : "Not agreed";
            
        const modalContent = `
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Product:</strong> ${product}<br>
            <strong>Quantity:</strong> ${quantity}<br>
            <strong>Purchase Date:</strong> ${orderDate}<br>
            <strong>Agreement:</strong> ${agreement}
        `;
            
        document.getElementById("modalContent").innerHTML = modalContent;
        const orderModal = new bootstrap.Modal(
            document.getElementById("orderModal")
        );
        orderModal.show();
        });
    });