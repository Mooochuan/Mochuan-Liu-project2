function RegisterPage() {
  return (
    <section className="page">
      <h1>Register</h1>
      <form className="auth-form">
        <label htmlFor="register-username">Username</label>
        <input id="register-username" type="text" />
        <label htmlFor="register-password">Password</label>
        <input id="register-password" type="password" />
        <label htmlFor="register-verify">Verify Password</label>
        <input id="register-verify" type="password" />
        <button type="button" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default RegisterPage;
