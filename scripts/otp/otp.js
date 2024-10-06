const BACKEND = "http://localhost:5000";
const FRONTEND = "http://127.0.0.1:5500";
document.getElementById("otpForm").addEventListener("submit", async function (event) {
  event.preventDefault();
  const otp = document.getElementById("otp").value;
  // get idf from the url
  const urlParams = new URLSearchParams(window.location.search);
  const idf = urlParams.get("idf");

  //   api end point /api/v1/auth/otp-enter
  const response = await fetch(`${BACKEND}/api/v1/auth/otp-enter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ otp, identifier: idf }),
  });

  const result = await response.json();
  //   {
  //     "success": true,
  //     "message": "User logged in successfully",
  //     "data": {
  //         "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuYWhpZG1haG11ZG4yQGdtYWlsLmNvbSIsInJvbGUiOiJIRUxQRVIiLCJpYXQiOjE3MjgxODQ1MzAsImV4cCI6MTcyODI3MDkzMH0.UO0PwaESvmk1AMIyPNRCJMW2W7MExLZBYc6O6xOGcFY"
  //     }
  // }

     if (result.success && result.data.accessToken) {
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

  //   alert("OTP " + otp + " has been submitted for verification.");
});
