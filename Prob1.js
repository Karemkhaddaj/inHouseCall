import React, { useState } from 'react'

function Prob1() {

    const [email, setEmail] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        const emailValue = event.target.email.value;

        if (isValidEmail(emailValue)) {
            console.log("Valid");
        } else {
            console.log("Not Valid");
        }
    }

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function isValidEmail(email) {
        if (email.length > 256) return false;
        let atIndex = -1;
        let hasValidDot = false;

        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                if (atIndex !== -1) return false;
                atIndex = i;
            } else if (email[i] === '.' && atIndex !== -1 && i > atIndex + 1) {
                hasValidDot = true;
            }
        }
        if (atIndex === 0 || atIndex === email.length - 1) return false;
        if (!hasValidDot) return false;
        return true;
    }

    return (
        <div>
            <h2>Enter your email: </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input onChange={handleChange} value={email} type="text" placeholder="name@example.com" id="email" name="email" />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}
export default Prob1