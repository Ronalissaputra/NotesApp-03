import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../component/RegisterInput";
import { register } from "../Utils/api";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2 className="mb-2 text-xl">Login Untuk Masuk</h2>
      <RegisterInput register={onRegisterHandler} />
      <p className="text-xl">
        Kembali ke{" "}
        <Link to="/" className="text-md underline text-indigo-600">
          Masuk
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
