import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterUser = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    surname: '',
    password: '',
    telephone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const { username, name, surname, password, telephone } = formData;
    props.onAddUser(username, name, surname, password, telephone);
    navigate('../users');
  };

  return (
    <div className="login">
      <div className="container text-center w-25">
        <div className="shadow p-3 mb-5 bg-white rounded haight">
          <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                required
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                placeholder="Име"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="surname"
                name="surname"
                required
                placeholder="Презиме"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="telephone"
                name="telephone"
                required
                placeholder="Телефон"
                onChange={handleChange}
              />
            </div>
            <br />
            <br />
            <button type="submit" id="submit" className="btn btn-primary">
              Регистрирај се
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
