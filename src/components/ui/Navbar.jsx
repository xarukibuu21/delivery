import React from 'react';

export default function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{user?.id ? user.name : 'Гость'}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            {user?.id ? (
              <>
                {user.isDeliver ?? (
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="items">Личный кабинет</a>
                  </li>
                )}

                <li className="nav-item">
                  <a className="nav-link" href="logout">Выход</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="signin">Вход</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="signup">Регистрация</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
