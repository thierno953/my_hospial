import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <div
      style={{
        marginTop: "100px",
        textAlign: "center",
        minHeight: "50vh",
        fontSize: "18px",
      }}
    >
      <h5>Vous rediriger en {count} seconds</h5>
    </div>
  );
};
export default Loading;
