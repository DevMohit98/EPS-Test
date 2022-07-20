import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { useGlobalContext } from "./Context";
const Profile = () => {
  const { id } = useParams();
  const { user } = useGlobalContext();
  // filter given user with the help of id
  const DetailUser = user.filter((item) => item.id === parseInt(id));
  return (
    <>
      <section className="detail">
        <div className="detail-card p-3">
          {DetailUser.map((item, index) => {
            const { name, username, email, address, phone, website, company } =
              item;
            return (
              <div key={index} className="user-info p-3">
                <i
                  className="fa-solid fa-left-long"
                  onClick={() => {
                    window.location.href = "/allusers";
                  }}
                ></i>
                <h2 className="pt-3">
                  <span> Name :-</span> {name}
                </h2>
                <h2 className="pt-3">
                  <span> Username :-</span> {username}
                </h2>
                <h2 className="pt-3">
                  <span> Email Id :-</span> {email}
                </h2>
                <h2 className="pt-3">
                  <span>Address :-</span>
                  {address.city}
                </h2>
                <h2 className="pt-3">
                  <span>Phone No :-</span> {phone}
                </h2>
                <h2 className="pt-3">
                  <span>Company :-</span> {company.name}
                </h2>
                <h2 className="pt-3">
                  <span>website :-</span> {website}
                </h2>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Profile;
