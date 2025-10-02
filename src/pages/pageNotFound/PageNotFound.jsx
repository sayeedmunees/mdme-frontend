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
    <div className="mdme__pageNotFound">
      <div className="mdme__pageNotFound-container">
        <div className="mdme__pageNotFound-container_errorCode">404</div>
        <h1 className="mdme__pageNotFound-container_errorTitle">Page Not Found</h1>
        <p className="mdme__pageNotFound-container_errorMessage">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="mdme__pageNotFound-container_countdown">
          Redirecting to home in {countdown} seconds...
        </p>
        <button className="mdme__pageNotFound-container_homeButton" onClick={handleGoHome}>
          Go Back to Home Now
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
