const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <p>Please enter your credentials to log in.</p>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign up here</a>.</p>
      <p>Forgot your password? <a href="/reset-password">Reset it here</a>.</p>
      <p>Need help? <a href="/help">Contact support</a>.</p>
  

    </div>
  );
};

export default Login;