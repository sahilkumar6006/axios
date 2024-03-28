import api from './api';

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
   if(error.response.status === 401) {
    throw new Error('Invalid Credentials');
   }else if(error.response.status == 403) {
    throw new Error('Unauthorized access')
   }else {
    throw error;
   }
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Other authentication-related functions...




// Managing Token Expiration

// Implement token expiration and refreshing mechanism:

import api from './api';

let accessToken = ''; // Store access token globally

export const loginUser2 = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    accessToken = response.data.accessToken;
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const response = await api.post('/auth/refresh-token', { accessToken });
    accessToken = response.data.accessToken;
  } catch (error) {
    // Handle refresh token error
  }
};

// Other authentication-related functions...