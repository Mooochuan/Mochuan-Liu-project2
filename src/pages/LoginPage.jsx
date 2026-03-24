function LoginPage() {
  return (
    <section className="page">
      <h1>Login</h1>
      <form className="auth-form">
        <label htmlFor="login-username">Username</label>
        <input id="login-username" type="text" />
        <label htmlFor="login-password">Password</label>
        <input id="login-password" type="password" />
        <button type="button" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
