import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EditReservation = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    surname: '',
    telephone: '',
    carBrand: '',
    carModel: '',
    serviceType: '',
    description: ''
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
      id,
      username: reservationUsername,
      name: reservationName,
      surname: reservationSurname,
      telephone: reservationTelephone,
      carBrand: reservationCarBrand,
      carModel: reservationCarModel,
      serviceType: reservationServiceType,
      description: reservationDescription
    } = props.reservation;

    const username = formData.username || reservationUsername;
    const name = formData.name || reservationName;
    const surname = formData.surname || reservationSurname;
    const telephone = formData.telephone || reservationTelephone;
    const carBrand = formData.carBrand || reservationCarBrand;
    const carModel = formData.carModel || reservationCarModel;
    const serviceType = formData.serviceType || reservationServiceType;
    const description = formData.description || reservationDescription;

    props.onEditReservation(id, username, name, surname, telephone, carBrand, carModel, serviceType, description);
    navigate('../reservations');
  };

  return (
    <div className="login">
      <div className="container w-50">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder={props.reservation.username}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder={props.reservation.name}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Surname</label>
              <input
                type="text"
                className="form-control"
                id="surname"
                name="surname"
                placeholder={props.reservation.surname}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Telphone</label>
              <input
                type="text"
                className="form-control"
                id="telephone"
                name="telephone"
                placeholder={props.reservation.telephone}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Car Brand</label>
              <input
                type="text"
                className="form-control"
                id="carBrand"
                name="carBrand"
                placeholder={props.reservation.carBrand}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Car model</label>
              <input
                type="text"
                className="form-control"
                id="carModel"
                name="carModel"
                placeholder={props.reservation.carModel}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label className="mx-2">Вид на сервис</label>
              <select name="serviceType" onChange={handleChange}>
                {props.s.map((term) => (
                  <option key={term} value={term}>
                    {term}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <div className="form-group">
              <label>Description</label>
              <input
                type="textarea"
                className="form-control"
                id="description"
                name="description"
                placeholder={props.reservation.description}
                onChange={handleChange}
              />
            </div>
            <br />
            <br />
            <div className="text-center">
              <Link className="btn btn-secondary mx-2" to="/reservations">
                Назад
              </Link>
              <button type="submit" id="submit" className="btn btn-primary w-25">
                Промени
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditReservation;