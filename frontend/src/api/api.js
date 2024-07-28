import axios from 'axios';

const apiurl = 'http://localhost:2020'; 

// import axios from 'axios';
// import { apiurl } from './config'; // Ensure you import apiurl or replace with the actual URL


export const getSupermarketsApi = async () => {
  try {
    const response = await axios.get(`${apiurl}/supermarkets`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the supermarkets!', error);
    throw error;
  }
}


export const signupUserApi = async (userData) => {
  try {
    const response = await axios.post(`${apiurl}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error('There was an error signing up the user!', error);
    throw error;
  }
}

export const signinUserApi = async (userData) => {
  try {
    const response = await axios.post(`${apiurl}/signin`, userData);
    return response.data;
  } catch (error) {
    console.error('There was an error logging in the user!', error);
    throw error;
  }
}



export const getAllSupermarket = async() => {
  try {
    let allsupermarket = await axios.get(`${apiurl}/supermarkets`);
    return allsupermarket.data;
  } catch (error) {
    console.error('There was an error fetching all supermarkets!', error);
    throw error;
  }
}

export const getSupProfile = async(id) => {
  try {
    let profilesupermarket = await axios.get(`${apiurl}/supermarkets/${id}`);
    return profilesupermarket.data;
  } catch (error) {
    console.error(`There was an error fetching the supermarket profile for ID: ${id}`, error);
    throw error;
  }
}



