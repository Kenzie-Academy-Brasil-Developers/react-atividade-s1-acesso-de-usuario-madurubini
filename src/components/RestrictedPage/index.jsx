import "./style.css";

function RestrictedPage({ isLoggedIn, user, Login, Logout }) {
  return (
    <>
      {isLoggedIn ? (
        <div className="Login">
          <h1>Bem-vinde, {user}</h1>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div className="Logout">
          <h1>Você não pode acessar essa página, verifique seu user.</h1>
          <button onClick={Login}>Login</button>
        </div>
      )}
    </>
  );
}

export default RestrictedPage;
