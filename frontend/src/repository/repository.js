import axios from "../custom-axios/axios";

const Service = {

    fetchUsers:()=>{
        return axios.get("/users")
    },
    fetchReservations:()=>{
        return axios.get("/reservations")
    },
    fetchServiceTypes:()=>{
        return axios.get("/reservations/serviceTypes")
    },
    // start on user functions
    addUser:(username,name,surname,password,telephone) =>{
        return axios.post("/users/add", {
            "username": username,
            "name": name,
            "surname": surname,
            "password": password,
            "telephone": telephone
        })
    },
    editUser:(username,name,surname,password,telephone) =>{
        return axios.post("/users/edit", {
            "username": username,
            "name": name,
            "surname": surname,
            "password": password,
            "telephone": telephone
        })
    },
    getUser:(username) => {
        return axios.get(`/users/${username}`);
    },
    deleteUser:(username)=>{
        return axios.delete(`/users/delete/${username}`)
    },
    changeRoleOnUser:(username) => {
        return axios.get(`/users/changeRole/${username}`);
    },
    // end of user functions

    // start of reservation function

    addReservation: (username,name,surname,telephone,carBrand,carModel,serviceType,description) => {
        return axios.post('/reservations/add', {
            "username": username,
            "name": name,
            "surname": surname,
            "telephone": telephone,
            "carBrand":carBrand,
            "carModel":carModel,
            "serviceType":serviceType,
            "description":description
        })
    },

    editReservation:(id,username,name,surname,telephone,carBrand,carModel,serviceType,description) => {
        return axios.put(`/reservations/edit/${id}`, {
            "username": username,
            "name": name,
            "surname": surname,
            "telephone": telephone,
            "carBrand":carBrand,
            "carModel":carModel,
            "serviceType":serviceType,
            "description":description
        })
    },

    getReservation: (id) =>{
        return axios.get(`/reservations/${id}`);
    },

    deleteReservation:(id) =>{
        return axios.delete(`/reservations/delete/${id}`);
    }



}

export default Service;