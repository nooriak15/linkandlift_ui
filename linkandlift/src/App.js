import './App.css';
import React, { useState } from 'react';

function App() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [submitted, setSubmitted] = useState(false); // For success message
    const [errorMessage, setErrorMessage] = useState(''); // For error message

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            username,
            email,
            phone_number: phoneNumber
        };

        try {
            const response = await fetch('http://localhost:8001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                // If POST request was successful
                const data = await response.json();
                console.log('User created successfully:', data);
                setSubmitted(true); // Show success message
                setErrorMessage(''); // Clear any previous errors
            } else {
                // Handle non-success status codes
                const errorData = await response.json();
                console.error('Error creating user:', errorData);
                setErrorMessage('Error creating user. Please try again.');
                setSubmitted(false); // Ensure success message is hidden
            }
        } catch (error) {
            // Handle any network or server errors
            console.error('Network error:', error);
            setErrorMessage('Error creating user. Please try again.');
            setSubmitted(false); // Ensure success message is hidden
        }
    };

    return (

        <div className="container">
            <h1>Link and Lift</h1>

            {/* Form for submitting user information */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <button type="submit">Submit User Info</button>
            </form>

            {/* Success or Error Message */}
            {submitted && <p style={{ color: 'green' }}>You have successfully submitted the user info!</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <footer>
                <p>Share the ride. Split the fare. Save the planet.</p>
            </footer>
        </div>

    );
}

export default App;
