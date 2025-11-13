import React from 'react'

const ProfileObject = ({profile}) => {
  return (
    <>
    <div>ProfileCard: Hi {profile.name}, the email on file is {profile.email}. You've been at the company for {profile.experience} years.
    Your title is {profile.role} and your status is:{profile.isActive ? <p> Congrats your profile is active</p> : <p>Unfortunately your profile is not active </p>}
    </div>
    </>
  )
}

export default ProfileObject