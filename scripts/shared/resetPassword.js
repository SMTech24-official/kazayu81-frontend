const BACKEND = "http://localhost:5000";
const FRONTEND = "http://127.0.0.1:5500";
document.getElementById("resetPasswordForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Clear previous error messages
  document.querySelectorAll(".error-message").forEach((element) => element.remove());

  // Simple password validation: check if passwords match
  if (newPassword !== confirmPassword) {
    showError("Passwords do not match.");
    return;
  }

  if (newPassword.length < 6) {
    showError("Password should be at least 6 characters long.");
    return;
  }

  // If everything is okay, make the password reset request
  resetPassword(newPassword);
});

function showError(message) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message text-danger";
  errorDiv.textContent = message;
  document.getElementById("resetPasswordForm").appendChild(errorDiv);
}

function resetPassword(password) {
  // Simulate a request to reset the password. In a real-world scenario, you'd make an API request here.
  // Example using fetch for an API call (replace the URL with your actual endpoint):

  // You might get email from session or other sources

  //   /api/v1/auth/reset-password
  //   get token from query url
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const id = Number(urlParams.get("userId"));
  console.log(token, typeof id, password);

  //   /api/v1/auth/reset-password

  fetch(`${BACKEND}/api/v1/auth/reset-password`, {
    method: "POST",
    // send token to heeaders
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },

    body: JSON.stringify({
      id,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        alert("Password reset successfully! Please log in with your new password.");
        window.location.href = "../../shared/login.html"; // Redirect to login page
      } else {
        showError("Failed to reset password. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      showError("An error occurred. Please try again later.");
    });
}
