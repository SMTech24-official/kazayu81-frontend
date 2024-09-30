document.getElementById('signinForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create the data object to be sent
    const formData = {
        email,
        password,
    };
    console.log(formData)

    try {
        // Send the data to the backend API
        const response = await fetch('https://helper-on-way.vercel.app/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });



        const result = await response.json();
        if (result.success) {
            localStorage.setItem('userData', JSON.stringify(result));
            if (result.data.role == 'HELPER') {
                window.location.href = 'https://how-s-front-end.vercel.app/Helper/Open.html';
            }
            if (result.data.role == 'CUSTOMER') {
                window.location.href = 'https://how-s-front-end.vercel.app/User/Dashboard.html'
            }else(window.location.href = 'https://how-s-front-end.vercel.app')

        }


        //window.location.href = 'https://helper-on-way.vercel.app/User/Dashboard.html'; 

    } catch (error) {
        console.error('Error:', error);
        alert(error.message);
    }

});