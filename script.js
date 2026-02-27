// Date & Time
function showDateTime() {
    setInterval(function() {
        document.getElementById("datetime").innerHTML =
            new Date().toLocaleString();
    }, 1000);
}

// Contact Form Validation
function validateForm() {

    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Invalid Email");
        return false;
    }

    if (isNaN(mobile) || mobile.length != 11) {
        alert("Mobile number must be 11 digits");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// FAQ Toggle
function toggleFAQ(element) {
    let answer = element.nextElementSibling;
    answer.style.display =
        answer.style.display === "block" ? "none" : "block";
}