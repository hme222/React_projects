import React from 'react'

const ProfileCard = ({name,email, experience, role, isActive}) => {
  return (
    <>
    <div>ProfileCard: Hi {name}, the email on file is {email}. You've been at the company for {experience} years.
    Your title is {role} and your status is:{isActive ? <p> Congrats your profile is active</p> : <p>Unfortunately your profile is not active </p>}
    </div>
    </>
  )
}

export default ProfileCard