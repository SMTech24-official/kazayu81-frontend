const BACKEND = "http://localhost:5000";
const FRONTEND = "http://127.0.0.1:5500";
document.getElementById("signupForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get form values using optional chaining where appropriate
  const firstName = document.getElementById("firstName")?.value || "";
  const lastName = document.getElementById("lastName")?.value || "";
  const accountType = document.querySelector('input[name="accountType"]:checked')?.value || "individual";
  const businessName = document.getElementById("businessName")?.value || null;
  const taxId = document.getElementById("taxId")?.value || null;
  const email = document.getElementById("email")?.value || "";
  const phoneNumber = document.getElementById("phoneNumber")?.value || "";
  const address = document.getElementById("address")?.value || "";
  const apartment = document.getElementById("appartment")?.value || "";
  const city = document.getElementById("city")?.value || "";
  const state = document.getElementById("state")?.value || "";
  const zipCode = document.getElementById("zipCode")?.value || "";
  const serviceLocation = document.getElementById("serviceLocation")?.value || "";
  const serviceType = document.getElementById("serviceType")?.value || "";
  const isLicensed = document.getElementById("licensedCheck")?.checked || false;
  const isInsured = document.getElementById("insuredCheck")?.checked || false;
  const password = document.querySelector('input[type="password"]')?.value || "";
  //   files
  const licenseImage = document.getElementById("licenseUpload")?.files[0];
  const insurenceImage = document.getElementById("insuranceUpload")?.files[0];

  // Build the form data object
  const bodyData = {
    firstName: firstName,
    lastName: lastName,
    checkType: accountType,
    businessLegalName: accountType === "business" ? businessName : null,
    einTexNumber: accountType === "business" ? taxId : null,
    email: email,
    phoneNumber: phoneNumber,
    address: address,
    apartment: apartment,
    city: city,
    state: state,
    zipCode: zipCode,
    serviceLocation: serviceLocation,
    profServiceType: serviceType,
    licenseOrNot: isLicensed,
    insuredOrNot: isInsured,
    password: password,
    userStatus: "ACTIVE", // Set user status to "ACTIVE"
  };

  //   form data

  const formData = new FormData();
  formData.append("data", JSON.stringify(bodyData)); // Append non-file data as JSON string
  if (licenseImage) {
    formData.append("licenseImage", licenseImage); // Append license image
  }
  if (insurenceImage) {
    formData.append("insurenceImage", insurenceImage); // Append insurance image
  }

  // Send the form data to the backend API
  try {
    const response = await fetch(`${BACKEND}/api/v1/helper/create-helper`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
      //   send user to login page
      window.location.href = `${FRONTEND}/Helper/Helper-login.html`;
    }
  } catch (error) {
    console.error("Error:", error);
    alert(error.message);
  }

  console.log(bodyData, licenseImage, insurenceImage);
});
