const BACKEND = "http://localhost:5000";
const FRONTEND = "http://127.0.0.1:5500";

// You can add your custom JS for form submission
document.getElementById("forgotPasswordForm").addEventListener("submit", async function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  //
  //   /api/v1/auth/forgot-password
  //

  // {
  //     "email": "iamkhalid.hs@gmail.com"
  //   }

  //   post email to backend

  const formData = {
    email,
  };

  try {
    // Send the data to the backend API
    const response = await fetch(`${BACKEND}/api/v1/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
    alert(error.message);
  }

  // Add your logic for handling password reset request here.
  alert("Password reset link has been sent to " + email);
});
