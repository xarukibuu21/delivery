import axios from 'axios';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    isDeliver: false,
  });

  const handleChange = (event) => setFormData(
    { ...formData, [event.target.name]: event.target.value },
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.name !== '' || formData.email !== '' || formData.password !== '' || formData.phone !== '' || formData.address !== '') {
      alert('Неверные данные');
      return;
    }
    const response = await axios.post('/api/auth/signup', formData);
    if (response.status === 200) {
      window.location.href = '/';
    }
  };

  return (
    <>
      <h1>Форма регистрации</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Имя</Form.Label>
          <Form.Control value={formData.name} onChange={handleChange} type="text" name="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control value={formData.email} onChange={handleChange} type="text" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Пароль</Form.Label>
          <Form.Control value={formData.password} onChange={handleChange} type="password" name="password" placeholder="Enter password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Телефон</Form.Label>
          <Form.Control value={formData.phone} onChange={handleChange} type="text" name="phone" placeholder="Enter phone" />
        </Form.Group>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Пользователь
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Курьер
          </label>
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Адрес</Form.Label>
          <Form.Control value={formData.address} onChange={handleChange} type="text" name="address" placeholder="Enter address" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Регистрация
        </Button>

      </Form>
    </>
  );
}
