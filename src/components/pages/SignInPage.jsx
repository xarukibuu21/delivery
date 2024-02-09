import React, { useState } from 'react';
import axios from 'axios';

function SignInPage() {
  const [formData, setFormData] = useState({
    name: '',
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
      if (response.status === 200) {
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Ошибка при входе: ', error);
    }
  };

  return (
    <div className="container">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" name="name" value={formData.username} onChange={handleChange} placeholder="Имя пользователя" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} placeholder="Пароль" />
        </div>
        <button type="submit" className="btn btn-primary">Войти</button>
      </form>
    </div>
  );
}

export default SignInPage;
