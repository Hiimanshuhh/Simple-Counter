import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const addNum = () => {
    setCount(count + 1);
  }

  const minusNum = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
        fontFamily: "Arial, sans-serif"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          color: "#333"
        }}>Counter Application</h1>
        <h1 style={{
          fontSize: "4rem",
          marginBottom: "2rem",
          color: "#007acc"
        }}>{count}</h1>
        <div>
          <button
            onClick={addNum}
            style={{
              margin: "0 1rem",
              padding: "0.5rem 1rem",
              fontSize: "1.25rem",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
            onMouseOver={e => e.target.style.backgroundColor = "#218838"}
            onMouseOut={e => e.target.style.backgroundColor = "#28a745"}
          >
            ADD
          </button>
          <button
            onClick={minusNum}
            style={{
              margin: "0 1rem",
              padding: "0.5rem 1rem",
              fontSize: "1.25rem",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
            onMouseOver={e => e.target.style.backgroundColor = "#c82333"}
            onMouseOut={e => e.target.style.backgroundColor = "#dc3545"}
          >
            MINUS
          </button>
          <button
            onClick={reset}
            style={{
              margin: "0 1rem",
              padding: "0.5rem 1rem",
              fontSize: "1.25rem",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
            onMouseOver={e => e.target.style.backgroundColor = "#218838"}
            onMouseOut={e => e.target.style.backgroundColor = "#28a745"}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  )
}

export default Counter
