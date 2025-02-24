// src/components/ProfilePhoto.js
import profilePhoto from './profile.png'
import './ProfilePhoto.css'
import React from 'react';

const ProfilePhoto = () => {
  return (
    <div className="profile-photo">
      <img src={profilePhoto} alt="Binith Kumar" />
    </div>
  );
};

export default ProfilePhoto;
