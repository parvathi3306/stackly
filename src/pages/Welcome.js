import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (loginData.email === "admin@enkonix.in" && loginData.password === "admin123") {
      setError("");
      localStorage.setItem("loggedInUserEmail", loginData.email);
      const logins = JSON.parse(localStorage.getItem("userLogins")) || {};
      logins[loginData.email] = new Date().toISOString();
      localStorage.setItem("userLogins", JSON.stringify(logins));
      navigate("/AdminDashboard");
      return;
    }

    const user = users.find(
      (user) => user.email === loginData.email && user.password === loginData.password
    );

    if (user) {
      setError("");
      localStorage.setItem("loggedInUserEmail", user.email);
      const logins = JSON.parse(localStorage.getItem("userLogins")) || {};
      logins[user.email] = new Date().toISOString();
      localStorage.setItem("userLogins", JSON.stringify(logins));
      navigate("/home");
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.email === signUpData.email)) {
      setError("User already exists with this email.");
      return;
    }

    users.push(signUpData);
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    alert("Signup successful! Please login.");
    setSignUpData({ firstName: "", lastName: "", email: "", password: "" });
    setIsLogin(true);
  };

  const handleForgotPasswordChange = (e) => {
    setForgotEmail(e.target.value);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.email === forgotEmail);

    if (!user) {
      setError("No user found with this email.");
      setResetMessage("");
    } else {
      setError("");
      setResetMessage(
        "User found. Please check your email for password reset instructions. (Simulation)"
      );
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          div[style*="display: flex"][style*="min-height: 100vh"] {
            flex-direction: column !important;
          }
          div[style*="flex: 1"]:nth-child(1),
          div[style*="flex: 1"]:nth-child(2) {
            width: 100% !important;
            margin: 0 !important;
            padding: 20px !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          h1, h2 {
            font-size: 24px !important;
            text-align: center;
          }
          input {
            font-size: 14px !important;
            padding: 10px 12px !important;
          }
          button {
            font-size: 14px !important;
            padding: 10px !important;
          }
          p[style*="cursor: pointer"] {
            font-size: 14px !important;
            text-align: center !important;
          }
        }

        .background-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.3;
          animation: float 8s ease-in-out infinite;
          filter: blur(60px);
          mix-blend-mode: screen;
        }
        .shape1 {
          width: 250px;
          height: 250px;
          background: #0a0343ff;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        .shape2 {
          width: 350px;
          height: 350px;
          background: #1e3a8aff;
          top: 50%;
          left: 40%;
          animation-delay: 3s;
        }
        .shape3 {
          width: 200px;
          height: 200px;
          background: #ffffffcc;
          top: 65%;
          left: 70%;
          animation-delay: 6s;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>

      <div style={styles.pageContainer}>
        <div style={styles.leftSide}>
          <div className="background-shape shape1" />
          <div className="background-shape shape2" />
          <div className="background-shape shape3" />
        </div>

        <div style={styles.rightSide}>
          <div style={styles.centeredContainer}>
            {!isForgotPassword ? (
              <>
                <h1 style={styles.welcomeHeading}>
                  Welcome to <span style={styles.highlight}>STACKLY</span>
                </h1>
                <p style={styles.welcomeSubtext}>
                  Welcome back, Please login into an account
                </p>

                {isLogin ? (
                  <form onSubmit={handleLoginSubmit} style={styles.form}>
                    <input
                      style={styles.input}
                      type="email"
                      name="email"
                      placeholder="Your Username"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      required
                    />
                    <input
                      style={styles.input}
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      required
                    />
                    <p
                      style={styles.forgotPassword}
                      onClick={() => {
                        setError("");
                        setIsForgotPassword(true);
                        setResetMessage("");
                      }}
                    >
                      Forgot password?
                    </p>
                    <button type="submit" style={styles.loginButton}>
                      <span role="img" aria-label="user-lock" style={{ marginRight: 8 }}>👤🔒</span> Login
                    </button>
                    <p
                      style={styles.toggle}
                      onClick={() => {
                        setError("");
                        setIsLogin(false);
                      }}
                    >
                      Don't have an account? Sign Up
                    </p>
                  </form>
                ) : (
                  <form onSubmit={handleSignUpSubmit} style={styles.form}>
                    <input
                      style={styles.input}
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={signUpData.firstName}
                      onChange={handleSignUpChange}
                      required
                    />
                    <input
                      style={styles.input}
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={signUpData.lastName}
                      onChange={handleSignUpChange}
                      required
                    />
                    <input
                      style={styles.input}
                      type="email"
                      name="email"
                      placeholder="Your Username"
                      value={signUpData.email}
                      onChange={handleSignUpChange}
                      required
                    />
                    <input
                      style={styles.input}
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={signUpData.password}
                      onChange={handleSignUpChange}
                      required
                    />
                    <button type="submit" style={styles.loginButton}>
                      Sign Up
                    </button>
                    <p
                      style={styles.toggle}
                      onClick={() => {
                        setError("");
                        setIsLogin(true);
                      }}
                    >
                      Already have an account? Login
                    </p>
                  </form>
                )}

                {error && <p style={styles.errorMsg}>{error}</p>}
                {resetMessage && <p style={{ color: "green", marginTop: 10 }}>{resetMessage}</p>}
              </>
            ) : (
              <>
                <h2 style={styles.welcomeHeading}>Reset Password</h2>
                <form onSubmit={handleForgotPasswordSubmit} style={styles.form}>
                  <input
                    style={styles.input}
                    type="email"
                    placeholder="Enter your registered email"
                    value={forgotEmail}
                    onChange={handleForgotPasswordChange}
                    required
                  />
                  <button type="submit" style={styles.loginButton}>
                    Send Reset Link
                  </button>
                  <p
                    style={styles.toggle}
                    onClick={() => {
                      setError("");
                      setResetMessage("");
                      setIsForgotPassword(false);
                    }}
                  >
                    Back to Login
                  </p>
                </form>
                {error && <p style={styles.errorMsg}>{error}</p>}
                {resetMessage && <p style={{ color: "green", marginTop: 10 }}>{resetMessage}</p>}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#0a0343ff",
    position: "relative",
    overflow: "hidden",
  },
  leftSide: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  rightSide: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "40px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
    maxWidth: "500px",
    width: "100%",
  },
  centeredContainer: {
    maxWidth: "400px",
    width: "100%",
  },
  welcomeHeading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
     color: "#0a0343ff",
  },
  highlight: {
    color: "#0a0343ff",
  },
  welcomeSubtext: {
    marginBottom: "30px",
    color: "#666",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px 15px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  loginButton: {
    backgroundColor: "#0a0343ff",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  forgotPassword: {
    textAlign: "right",
    color: "#090628ff",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "-10px",
  },
  toggle: {
    cursor: "pointer",
    color: "#0a0343ff",
    marginTop: "15px",
    textAlign: "center",
    userSelect: "none",
  },
  errorMsg: {
    color: "red",
    marginTop: "10px",
    textAlign: "center",
  },
};

export default Welcome;
