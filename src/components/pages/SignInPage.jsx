import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../ui/Navbar';

function SignInPage({ user }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signin', formData);
      console.log('Успешный вход: ', response.data);
    } catch (error) {
      console.error('Ошибка при входе: ', error);
    }
  };

  return (
    <>
      <Navbar user={user} />
      <div className="container">
        <h2>Вход</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} placeholder="Имя пользователя" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} placeholder="Пароль" />
          </div>
          <button type="submit" className="btn btn-primary">Войти</button>
        </form>
      </div>
    </>
  );
}

export default SignInPage;
