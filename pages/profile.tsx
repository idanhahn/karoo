import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (user) {
    return (
      <div>
        <p>Hello {user.name}</p>
      </div>
    );
  }

  return <div>Login</div>;
};

export default Profile;
