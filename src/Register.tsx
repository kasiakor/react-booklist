import React from "react";
import "./App.css";

function Register() {
  // two state items, username and mobile number
  const [username, setUsername] = React.useState("");
  const [mobile, setMobile] = React.useState("");

  // two state items error handling
  const [usernameError, setUsernameError] = React.useState("");
  const [mobileError, setMobileError] = React.useState("");

  // Validation regex
  const usernameRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const mobileRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;

  // Validate username on change
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    if (!usernameRegex.test(value)) {
      setUsernameError(
        "username must be at least 8 characters, include uppercase, lowercase, number, and special character."
      );
    } else {
      setUsernameError("");
    }
  };

  // Validate mobile on change
  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMobile(value);
    if (!mobileRegex.test(value)) {
      setMobileError("Enter a valid UK mobile number.");
    } else {
      setMobileError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Final check before submit (optional, since validation is live)
    if (!usernameError && !mobileError && username && mobile) {
      alert("Registration successful!");
    }
  };

  return (
    <div className="register-bg">
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <h2 className="register-title">Register</h2>
        <div className="register-field">
          <label htmlFor="username" className="register-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="register-input"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            autoComplete="username"
          />
          {usernameError && (
            <div className="register-error">{usernameError}</div>
          )}
        </div>
        <div className="register-field">
          <label htmlFor="mobile" className="register-label">
            UK Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            required
            className="register-input"
            value={mobile}
            onChange={handleMobileChange}
            placeholder="e.g. 07123 456789"
            autoComplete="tel"
          />
          {mobileError && <div className="register-error">{mobileError}</div>}
        </div>
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
