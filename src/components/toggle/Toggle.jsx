import { useContext } from "react";
import "./toggle.css";
import { ThemeContext } from "../context";

function Toggle() {
    const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src='./img/sun.png' alt="" className="t-icon" />
      <img src="./img/moon.png" alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
}


export default Toggle;