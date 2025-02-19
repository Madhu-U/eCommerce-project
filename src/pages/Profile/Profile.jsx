import React, { useContext, useState } from "react";
import styles from "./profile.module.css";
import { ProductContext } from "../../context/ProductContext";
import closeIcon from "../../assets/images/x-solid.svg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser, loggedIn, setLoggedIn } = useContext(ProductContext);
  const { fullName, email } = currentUser;
  const [editDetails, setEditDetails] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileDetails}>
        <h1>Welcome, {fullName}</h1>
        <p>Manage your account</p>
        <h2>Account Details</h2>
        <div className={styles.profileContent}>
          <ul>
            <li>
              <p>
                👤 Name: <span>{fullName}</span>
              </p>
            </li>
            <li>
              <p>
                📧 Email: <span>{email}</span>
              </p>
            </li>
          </ul>
          <div className={styles.btns}>
            <button
              onClick={() => {
                setEditDetails(true);
              }}
            >
              🔄 Edit Details
            </button>
            <button
              onClick={() => {
                setChangePassword(true);
              }}
            >
              🔐 Change Password
            </button>
            <button
              onClick={() => {
                setLoggedIn(false);
                navigate("/login");
              }}
            >
              🔴 Log Out
            </button>
          </div>
        </div>
      </div>
      {(editDetails || changePassword) && (
        <div
          className={styles.overlay}
          onClick={() => {
            editDetails ? setEditDetails(false) : setChangePassword(false);
          }}
        >
          {
            <>
              {editDetails && (
                <>
                  <form
                    className={styles.detailsForm}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div>
                      <h2>Edit Your Details</h2>
                      <div onClick={() => setEditDetails(false)}>
                        <img src={closeIcon} alt="" />
                      </div>
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter New Name"
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter New Email"
                    />
                    <button>Submit</button>
                  </form>
                </>
              )}
              {changePassword && (
                <>
                  <form
                    className={styles.detailsForm}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div>
                      <h2>Change Password</h2>
                      <div onClick={() => setChangePassword(false)}>
                        <img src={closeIcon} alt="" />
                      </div>
                    </div>
                    <input
                      type="password"
                      name="oldPassword"
                      id="oldPassword"
                      placeholder="Enter your old password"
                    />
                    <input
                      type="password"
                      name="newPassword"
                      id="newPassword"
                      placeholder="Enter your New Password"
                    />
                    <input
                      type="password"
                      name="confirmNewPassword"
                      id="confirmNewPassword"
                      placeholder="Confirm New Password"
                    />
                    <button>Submit</button>
                  </form>
                </>
              )}
            </>
          }
        </div>
      )}
    </div>
  );
};

export default Profile;
