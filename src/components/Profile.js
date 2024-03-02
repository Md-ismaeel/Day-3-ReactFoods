import React from "react";
import "../Style/profile.css";

function Profile(props) {
  return (
    <>
      <div className="card">
        <p>{props.description}</p>

        <div className="profile">
          <img
            src={props.imageName} // Use profileImage if props.imageName is not provided
            height={"50px"}
            width={"50px"}
            alt="Profile"
          />
          <div className="image-profile">
            <p>{props.names}</p>
            <p>Head of SEO</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
