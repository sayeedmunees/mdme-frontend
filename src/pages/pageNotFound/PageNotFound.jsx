import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pageNotFound.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="page-not-found">
      <div className="error-container">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-message">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="countdown">
          Redirecting to home in {countdown} seconds...
        </p>
        <button className="home-button" onClick={handleGoHome}>
          Go Back to Home Now
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
