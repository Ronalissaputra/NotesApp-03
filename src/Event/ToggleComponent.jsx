import { ThemeConsumer } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <FaMoon className="text-[18px] lg:text-lg" />
            ) : (
              <FaSun className="text-[18px] lg:text-lg" />
            )}
          </button>
        );
      }}
    </ThemeConsumer>
  );
}

export default ToggleTheme;
