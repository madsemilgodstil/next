const Button = ({ ctaText }) => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      backgroundColor: "#fff",
      color: "#111",
      border: "none",
      padding: "10px 20px",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <button className="button" style={styles.button}>
        {ctaText}
      </button>
    </div>
  );
};

export default Button;
