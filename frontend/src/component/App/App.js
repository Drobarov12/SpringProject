import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Service from "../../repository/repository";
import Home from "../Home/home"
import Users from "../Users/UserList/users"
import Reservations from "../Reservations/ListReservations/reservations"
import MainHeader from "../Headers/MainHeader/mainHeader"
import Register from "../Users/RegisterUser/registerUser"
import EditUser from "../Users/EditUser/editUser"
import AddReservation from "../Reservations/AddReservation/addReservation"
import EditReservation from "../Reservations/EditReservation/editReservation"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
            users: [],
            rezervationPerUser: [],
            servicesType:[],
            selectedUser: {},
            selectedReservation:{}
        }
    }

    render() {
        return (
            <BrowserRouter>
                <MainHeader/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="users/edit"
                           element={<EditUser onEditUser={this.editUser} user={this.state.selectedUser}/>}/>
                    <Route path="users" element={<Users users={this.state.users}
                                                        onDelete={this.deleteUser}
                                                        onEdit={this.getUser}
                                                        onChangeRole={this.changeRoleOnUser}/>}/>
                    <Route path="registerUser" element={<Register onAddUser={this.addUser}/>}/>


                    <Route path="reservations/add" element={<AddReservation s={this.state.servicesType}
                                                                            onAddReservation={this.addReservation}/>}/>
                    <Route path="reservations/edit" element={<EditReservation reservation={this.state.selectedReservation}
                                                                             s={this.state.servicesType}
                                                                             onEditReservation={this.editReservation}/>}/>
                    <Route path="reservations" element={<Reservations reservations={this.state.reservations}
                                                                      onDeleteRes={this.deleteReservation}
                                                                      onEditRes={this.getReservation}/>}/>

                </Routes>
            </BrowserRouter>
        );
    }

    componentDidMount() {
        this.loadUsers();
        this.loadReservations();
        this.loadServicesType();
    }

    loadUsers = () => {
        Service.fetchUsers()
            .then((data) => {
                this.setState({
                    users: data.data
                })
            })
    }

    loadReservations = () => {
        Service.fetchReservations()
            .then((data) => {
                this.setState({
                    reservations: data.data
                })
            })
    }

    loadServicesType = () =>{
        Service.fetchServiceTypes()
            .then((data) => {
                this.setState({
                    servicesType: data.data
                })
            })
    }

    // start of user functions

    deleteUser = (username) => {
        Service.deleteUser(username)
            .then(() => {
                this.loadUsers()
            })
    }

    addUser = (username, name, surname, password, telephone) => {
        Service.addUser(username, name, surname, password, telephone)
            .then(() => {
                this.loadUsers()
            })
    }

    editUser = (username, name, surname, password, telephone) => {
        Service.editUser(username, name, surname, password, telephone)
            .then(() => {
                this.loadUsers()
            })
    }

    getUser = (username) => {
        Service.getUser(username)
            .then((data) => {
                this.setState({
                    selectedUser: data.data
                })
            })
    }

    changeRoleOnUser = (username) => {
        Service.changeRoleOnUser(username)
            .then(() => {
                this.loadUsers()
            })
    }

//    end of user functions

//    start of reservation functions

    addReservation = (username,name,surname,telephone,carBrand,carModel,serviceType,description) => {
        Service.addReservation(username,name,surname,telephone,carBrand,carModel,serviceType,description)
            .then(()=>{
                this.loadReservations()
            })
    }

    editReservation = (id,username,name,surname,telephone,carBrand,carModel,serviceType,description) => {
        Service.editReservation(id,username,name,surname,telephone,carBrand,carModel,serviceType,description)
            .then(()=>{
                this.loadReservations()
            })
    }

    getReservation = (id) =>{
        Service.getReservation(id)
            .then((data) => {
                this.setState({
                    selectedReservation: data.data
                })
            })
    }

    deleteReservation = (id) => {
        Service.deleteReservation(id)
            .then(()=>{
                this.loadReservations()
            })
    }


//    end of reservation functions
}

export default App;
