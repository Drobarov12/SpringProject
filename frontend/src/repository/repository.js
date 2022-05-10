import axios from "../custom-axios/axios";

const Service = {

    fetchUsers:()=>{
        return axios.get("/users")
    },
    fetchReservations:()=>{
        return axios.get("/reservations")
    },
    deleteUser:(username)=>{
        return axios.delete(`/users/delete/${username}`)
    },
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
    }
}

export default Service;