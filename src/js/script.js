"use strict";

const form = document.querySelector(".form");
const btnSubmit = document.querySelector(".btn-submit");
const allInputs = document.querySelectorAll(".form-input");

//validating the input
const validateEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|mil|edu|biz|gov|info|name|museum|[a-zA-Z]{2})$/;

  return emailRegex.test(email);
};

/// Manipulating the DOM
const domManipulate = function (inp, label) {
  const errorMsgEl = inp.parentElement.nextElementSibling;

  if (inp.value === "") {
    errorMsgEl.textContent = `${label} can not be empty`;
    inp.style.borderColor = "var(--red)";
    inp.labels[0].style.color = "var(--red)";
    return false;
  } else if (label === "Email" && !validateEmail(inp.value)) {
    errorMsgEl.textContent = "Looks like this is not an email";
    inp.style.borderColor = "var(--red)";
    inp.labels[0].style.color = "var(--red)";
    return false;
  } else {
    errorMsgEl.textContent = "";
    inp.style.borderColor = "var(--grayish-blue)";
    inp.labels[0].style.color = "var(--green)";
    return true;
  }
};

/// Check all inputs
const checkData = function () {
  let isValid = true;

  allInputs.forEach((input) => {
    if (input.id === "fname") {
      if (!domManipulate(input, "First Name")) {
        isValid = false;
      }
    }
    if (input.id === "lname") {
      if (!domManipulate(input, "Last Name")) {
        isValid = false;
      }
    }
    if (input.id === "email") {
      if (!domManipulate(input, "Email")) {
        isValid = false;
      }
    }
    if (input.id === "password") {
      if (!domManipulate(input, "Password")) {
        isValid = false;
      }
    }
  });

  return isValid;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("checkData():", checkData());

  if (checkData()) {
    form.submit();
  }
});
