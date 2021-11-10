import "./styles.css";

export const Button = ({ children }) => {
  return (
    <div className="buttonContainer">
      <button className="button">{children}</button>
    </div>
  );
};
