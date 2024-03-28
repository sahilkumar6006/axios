import api from './api';

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    const accessToken = response.data.accessToken;
    const userProfile = await fetchUserProfile(accessToken); // Fetch user profile data
    return { accessToken, userProfile }; // Return both access token and user profile
  } catch (error) {
    throw error;
  }
};

export const fetchUserProfile = async (accessToken) => {
  try {
    const response = await api.get('/user/profile', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};




// this code is for the reference 

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { fetchUserProfile } from './auth';

const ProfileScreen = ({ route }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const { accessToken } = route.params;
    const fetchProfile = async () => {
      try {
        const profileData = await fetchUserProfile(accessToken);
        setUserProfile(profileData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchProfile();
  }, [route.params]);

  return (
    <View>
      {userProfile ? (
        <View>
          <Text>User Profile:</Text>
          <Text>Name: {userProfile.name}</Text>
          <Text>Email: {userProfile.email}</Text>
          {/* Display other user profile information */}
        </View>
      ) : (
        <Text>Loading user profile...</Text>
      )}
    </View>
  );
};

export default ProfileScreen;