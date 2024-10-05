document.getElementById("signinForm").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create the data object to be sent
  const formData = {
    email,
    password,
  };
  console.log(formData);

  try {
    // Send the data to the backend API
    const response = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // http://127.0.0.1:5500/Helper/Helper-login.html

    const result = await response.json();
    if (result.success) {
      localStorage.setItem("userData", JSON.stringify(result));
      if (result.data.role == "HELPER") {
        window.location.href = "http://127.0.0.1:5500/Helper/Open.html";
      }
      if (result.data.role == "CUSTOMER") {
        window.location.href = "http://127.0.0.1:5500/User/Dashboard.html";
      } else window.location.href = "http://127.0.0.1:5500";
    }

    //window.location.href = 'https://helper-on-way.vercel.app/User/Dashboard.html';
  } catch (error) {
    console.error("Error:", error);
    alert(error.message);
  }
});
