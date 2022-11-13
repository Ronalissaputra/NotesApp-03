import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../component/LoginInput";
import { login } from "../Utils/api";

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2 className="mb-2 text-xl">Silakan masuk untuk melanjutkan ...</h2>
      <LoginInput login={onLogin} />
      <p className="text-xl">
        Belum punya akun?{" "}
        <Link to="/register" className="text-md underline text-indigo-600">
          Daftar di sini.
        </Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
