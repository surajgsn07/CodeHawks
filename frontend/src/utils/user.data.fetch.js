import axios from 'axios'
import { request} from '../constants'

const signup = async (formData)=>{
    try {
        const response = await axios.post(`${request}/users/signup` , formData , {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching reisteruser data:', error);
    }
}

const loginUser = async(formData)=>{
    try {
        console.log(formData)
        const response = await axios.post(`${request}/users/login` , formData , {
            withCredentials: true, // Include cookies
          });  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching login data:', error);
    }
}

const logoutUser = async()=>{
    try {
        // console.log(formData)
        const response = await axios.post(`${request}/users/logout`,{},{
          withCredentials:true
        });  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching logout data:', error);
    }
}

const editProfile = async(data)=>{
    try {
        // console.log(formData)
        const response = await axios.post(`${request}/users/editProfile` , data,{
            withCredentials:true
        });  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching edit profile data:', error);
    }
}

const toggleFollow = async(userId)=>{
    try {
        // console.log(formData)
        console.log(userId)
        const response = await axios.post(`${request}/users/toggleFollow/${userId}` , {} ,{
            withCredentials:true
        });  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching  toogling follow:', error);
    }
}

const recommendUsers = async()=>{
    try {
        // console.log(formData)
        const response = await axios.post(`${request}/users/recommendUsers`,{} ,{
            withCredentials:true
        });  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching  recommendUsers:', error);
    }
}

const findPeople = async(searchQuery)=>{
  try {
      // console.log(formData)
      const response = await axios.post(`${request}/users/findPeople?searchQuery=${searchQuery}` ,{} ,{
          withCredentials:true
      });  
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching  find people:', error);
  }
}

const getCurrentUser = async(searchQuery)=>{
  try {
      // console.log(formData)
      console.log(document.cookie)
      const response = await axios.post(`${request}/users/getCurrentUser` ,{},{
          withCredentials:true
      });  
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching  getting current usr:', error);
  }
}


const getAllUsers = async()=>{
  try {
      // console.log(formData)
      console.log(document.cookie)
      const response = await axios.post(`${request}/users/getAllUsers` ,{},{
          withCredentials:true
      });  
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching  getting current usr:', error);
  }
}


export {
    signup,
    loginUser,
    logoutUser,
    editProfile,
    toggleFollow,
    recommendUsers,
    findPeople,
    getCurrentUser,
    getAllUsers
}