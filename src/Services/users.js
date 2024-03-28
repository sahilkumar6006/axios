import api from './api';

export const fetchUserProfile = async (userId, accessToken) => {
  try {
    const response = await api.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 401 ||error.response.status === 403) {
      throw new Error('Unauthorized access');
    } else {
      throw error;
    }
  
  }
};

export const updateUserProfile = async (userId, userData) => {
  try {
    const response = await api.put(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Other user-related functions...