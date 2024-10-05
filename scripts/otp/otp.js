const BACKEND = "http://localhost:5000";
const FRONTEND = "http://127.0.0.1:5500";
document.getElementById("otpForm").addEventListener("submit", async function (event) {
  event.preventDefault();
  const otp = document.getElementById("otp").value;

  //   api end point /api/v1/auth/otp-enter
  const response = await fetch(`${BACKEND}/api/v1/auth/otp-enter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ otp }),
  });

  const result = await response.json();
  console.log(result);

//   alert("OTP " + otp + " has been submitted for verification.");
});
