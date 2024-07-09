import axios from "axios"

let apiurl = 'http://localhost:7000'

export const getAllSupermarket = async() => {
 
    let allsupermarket = await axios.get (`${apiurl}/supermarkets`)
    
 return allsupermarket.data

    // let allSuperM = allsupermarket.data
    // console.log(allSuperM)
    

}



export const getSupProfile = async(id) => {
 
    let profilesupermarket = await axios.get (`${apiurl}/supermarkets/${id}`)
    
 return profilesupermarket.data

    // let allSuperM = allsupermarket.data
    // console.log(allSuperM)
    

}