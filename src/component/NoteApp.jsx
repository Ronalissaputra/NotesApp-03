import React from "react";
import { Route, Routes } from "react-router-dom";
import NoteNav from "./NoteNav";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../Utils/api";
import { ThemeProvider } from "../context/ThemeContext";
import ToggleTheme from "../Event/ToggleComponent";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem("theme") || "light",
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === "light" ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
          return {
            theme: newTheme,
          };
        });
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute("data-theme", this.state.theme);
    }
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    document.documentElement.setAttribute("data-theme", this.state.theme);
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });
    putAccessToken("");
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
          <div className="lg:px-20 md:px-5 px-2">
            <header className="flex justify-between items-center border-b-2">
              <h1 className="text-2xl text-indigo-700 font-bold my-5 ">
                NoteApp
              </h1>
              <ToggleTheme />
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider value={this.state}>
        <div className="Note-app">
          <NoteNav logout={this.onLogout} name={this.state.authedUser.name} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

export default NoteApp;
