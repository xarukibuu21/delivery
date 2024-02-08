import React, { useState } from 'react';
import axios from 'axios';

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    isDeliver: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signup', formData);
      console.log('Пользователь зарегистрирован', response.data);
    } catch (error) {
      console.error('Ошибка при регистрации', error);
    }
  };

  return (
    <div className="container">
      <h1 className="mb-4">Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Имя" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} placeholder="Пароль" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} placeholder="Телефон" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} placeholder="Адрес" />
        </div>
        <div className="mb-3">
          <div>Выберите:</div>
          <label>
            <input
              type="radio"
              name="isDeliver"
              checked="checked"
              value="false"
              onChange={handleChange}
            />
            Пользователь
          </label>
          <label>
            <input
              type="radio"
              name="isDeliver"
              value="true"
              onChange={handleChange}
            />
            Курьер
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default SignUpPage;
