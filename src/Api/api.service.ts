import axios from "axios";
import {Person} from "@/DATA/NewInterfaces";


export const getOldPersons = async function f() {
    const response = await axios.get('api/persons.json');
    const PERSONS = response.data.map( (h: any) => {
        return h;
    });
    return PERSONS;
};

export const getToken = async function f() {
    const userData = {
        "username": "kstasiak",
        "password": "Finanse2021",
    };
    const token = await axios.post("http://lendi-recruitment.azurewebsites.net/token", userData)
        .then(response => {
           return response.data.access_token ;
        });
    console.log(token);
    return token;
};

export const getPersons = async function f(token:string) {
    const response = await axios.get("http://lendi-recruitment.azurewebsites.net/api/users?skip=0&take=512",
        {headers: {
                'Authorization': `Bearer ${token}`
            }});
    const PERSONS = response.data.map( (h: any) => { return h; });
    return PERSONS;
}

export const addPerson = async  function f(token:string,person:Person) {
    const response = await axios.post('http://lendi-recruitment.azurewebsites.net/api/users',person,
        {headers: { 'Authorization': `Bearer ${token}`}});
}

export const changePerson = async  function f(token:string,id:string,person:Person) {
    const response = await axios.put(`http://lendi-recruitment.azurewebsites.net/api/users/${id}`,person,
        {headers: { 'Authorization': `Bearer ${token}`}});
}

export const deletePerson = async function f(token:string,id:string) {
    const response = await axios.delete(
        `http://lendi-recruitment.azurewebsites.net/api/users/${id}`,
        {headers: { 'Authorization': `Bearer ${token}`}});
}
