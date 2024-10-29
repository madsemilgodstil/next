"use client"; // This directive is necessary in Next.js to specify that this component is a client-side component.
import Button from "./Button";
import { TbCookieManFilled } from "react-icons/tb"; // Importing an icon from react-icons library
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks from React

const CookieConsent = () => {
  // useState hook to manage visibility of the cookie consent popup
  const [isVisible, setIsVisible] = useState(true);

  // useEffect hook to check localStorage on component load
  useEffect(() => {
    // Check if the user has already given consent by looking for 'cookieConsent' in localStorage
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setIsVisible(true); // Show the popup if consent has not been given
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to handle the accept button click event
  const handleAccept = () => {
    // Store 'cookieConsent' in localStorage to remember the user's consent choice
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false); // Hide the popup after acceptance
  };

  // Conditionally render the component only if isVisible is true
  if (!isVisible) {
    return null; // Return null hides the component from the UI if isVisible is false
  }

  // Inline styling for the component, written in camelCase to work in React
  const styles = {
    // Main container style for the popup
    container: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "300px",
      height: "200px",
      backgroundColor: "#111",
      color: "#fff",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    // Styling for the header which contains the icon on the left and close button on the right
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    // Styling for the content area text
    content: {
      fontSize: "16px",
      margin: "10px 0 0 0",
    },
    // Styling for the cookie icon
    cookieIcon: {
      fontSize: "30px",
      color: "#fff",
    },
    // Styling for the accept button
    button: {
      backgroundColor: "#fff",
      color: "#111",
      border: "none",
      padding: "10px 20px",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
      alignSelf: "center",
    },
    // Styling for the close button (X) that dismisses the popup
    closeButton: {
      background: "none",
      border: "none",
      color: "#fff",
      fontSize: "18px",
      cursor: "pointer",
    },
  };

  // Render the cookie consent popup
  return (
    <div style={styles.container}>
      {/* Header with cookie icon on the left and close button on the right */}
      <div style={styles.header}>
        <TbCookieManFilled style={styles.cookieIcon} /> {/* Display cookie icon */}
        <button style={styles.closeButton} onClick={() => setIsVisible(false)}>
          ✕
        </button>
      </div>

      {/* Consent message */}
      <p style={styles.content}>
        We use cookies to improve your user experience.
      </p>

    
      <Button style={styles.button} ctaText="I like Cookies" />
    </div>
  );
};

export default CookieConsent; // Exporting the component for use in other parts of the app