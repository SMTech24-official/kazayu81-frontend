const BACKEND = "http://localhost:5000";
const FRONTEND = "http://127.0.0.1:5500";

document.getElementById("signinForm").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create the data object to be sent
  const formData = {
    email,
    password,
  };
  // console.log(formData);

  try {
    // Send the data to the backend API
    const response = await fetch(`${BACKEND}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // http://127.0.0.1:5500/Helper/Helper-login.html

    const result = await response.json();
    if (result.success) {
      localStorage.setItem("token", JSON.stringify(result?.data?.accessToken));
      console.log(result?.data?.accessToken);
      // get me "/api/v1/auth/get-me"

      const TOKEN = JSON.parse(localStorage.getItem("token"));
      const response = await fetch(`${BACKEND}/api/v1/auth/get-me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${TOKEN}`,
        },
      });
      const GetmeData = await response.json();
      if (GetmeData.success) {
        localStorage.setItem("user", JSON.stringify(GetmeData?.data));
      }

      if (result.data.role == "HELPER") {
        window.location.href = `${FRONTEND}/Helper/Open.html`;
      }
      if (result.data.role == "CUSTOMER") {
        window.location.href = `${FRONTEND}/User/Dashboard.html`;
      } else window.location.href = FRONTEND;
    }
  } catch (error) {
    console.error("Error:", error);
    alert(error.message);
  }
});
