import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditUser = (props) => {
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
    const {
      username: userUsername,
      name: userName,
      surname: userSurname,
      password: userPassword,
      telephone: userTelephone
    } = props.user;

    const username = formData.username || userUsername;
    const name = formData.name || userName;
    const surname = formData.surname || userSurname;
    const password = formData.password || userPassword;
    const telephone = formData.telephone || userTelephone;

    props.onEditUser(username, name, surname, password, telephone);
    navigate('../users');
  };

  return (
    <div className="login">
      <div className="container text-center w-50">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                disabled
                placeholder={props.user.username}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Име</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder={props.user.name}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Презиме</label>
              <input
                type="text"
                className="form-control"
                id="surname"
                name="surname"
                placeholder={props.user.surname}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Пасворд</label>
              <input
                type="text"
                className="form-control"
                id="password"
                name="password"
                placeholder={props.user.password}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Телефон</label>
              <input
                type="text"
                className="form-control"
                id="telephone"
                name="telephone"
                placeholder={props.user.telephone}
                onChange={handleChange}
              />
            </div>
            <br />
            <br />
            <div className="text-center">
              <Link to="/users" className="btn btn-secondary">
                Назад
              </Link>
              <button type="submit" id="submit" className="btn btn-primary m-3 w-25">
                Промени
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;