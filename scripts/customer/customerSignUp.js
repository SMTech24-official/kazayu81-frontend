const BACKEND = "http://localhost:5000";
const FRONTEND = "http://127.0.0.1:5500";

document.getElementById("signupForm").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const password = document.querySelector('input[type="password"]').value;
  // Create the data object to be sent

  //   {
  //     "firstName": "KHs",
  //     "lastName": "again",
  //     "phoneNumber": "0000000",
  //     "email": "kfs@gmail.com",
  //     "password": "t@gmail.com"
  // }
  const userInputData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    password: password,
  };
  try {
    // Send the data to the backend API
    console.log(userInputData);
    // backend endpoint  "/api/v1/customer/create-customer"
    const response = await fetch(`${BACKEND}/api/v1/customer/create-customer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInputData),
    });

    const result = await response.json();
    // console.log(result);
    if (result.success) {
      // redirect user to login page

      window.location.href = `${FRONTEND}/Helper/Helper-login.html`;
    }
  } catch (error) {
    console.error("Error:", error);
    alert(error.message);
  }
});
