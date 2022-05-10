import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Service from "../../repository/repository";
import Home from "../Home/home"
import Users from "../Users/UserList/users"
import Reservations from "../Reservations/reservations"
import MainHeader from "../Headers/MainHeader/mainHeader"
import Register from "../Users/RegisterUser/registerUser"
import EditUser from "../Users/EditUser/editUser"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
            users: [],
            rezervationPerUser: [],
            selectedUser: {}
        }
    }

    render() {
        return (


            <BrowserRouter>
                <MainHeader/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="users" element={<Users users={this.state.users}
                                                        onDelete={this.deleteUser}
                                                        onEdit={this.getUser}
                                                        onChangeRole={this.changeRoleOnUser}/>}/>
                    <Route path="registerUser" element={<Register onAddUser={this.addUser}/>}/>
                    <Route path="editUser"
                           element={<EditUser onEditUser={this.editUser} user={this.state.selectedUser}/>}/>

                    <Route path="reservations" element={<Reservations reservations={this.state.reservations}/>}/>

                </Routes>
            </BrowserRouter>
        );
    }

    componentDidMount() {
        this.loadUsers();
        this.loadReservations();
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
}

export default App;
