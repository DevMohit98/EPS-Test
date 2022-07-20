import React from "react";
import "../App.css";
import { useGlobalContext } from "./Context";
const AllUser = () => {
  const { user, setUser } = useGlobalContext();

  const DeleteUser = (id) => {
    let item = user.filter((item) => item.id !== id);
    let DeleteFromLocalStorage = JSON.parse(localStorage.getItem("addedUser"));
    let Deleted = DeleteFromLocalStorage.filter((item) => item.id !== id);
    localStorage.setItem("addedUser", JSON.stringify(Deleted));
    setUser(item);
  };

  return (
    <>
      <section className="p-3">
        <div className="container-fluid">
          <div className="row g-4">
            {user.map((item, index) => {
              const { id, username, email, address } = item;
              const { city } = address;
              return (
                <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={index}>
                  <div className="user-card p-3">
                    <h2 className="pt-2">
                      <i
                        className="fa-solid fa-circle-user mx-3"
                        style={{ color: "#224095" }}
                      ></i>
                      <span> Username :-</span> {username}
                    </h2>
                    <h2 className="pt-2">
                      <i
                        className="fa-solid fa-paper-plane  mx-3"
                        style={{ color: "#00c853" }}
                      ></i>
                      <span>Email Id :-</span> {email}
                    </h2>
                    <h2 className="pt-2">
                      <i
                        className="fa-solid fa-location-arrow  mx-3"
                        style={{ color: "#ff5252" }}
                      ></i>
                      <span>City :-</span> {city}
                    </h2>
                    <div className="d-flex justify-content-around align-items-center mt-4 mb-2 user-button">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          window.location.href = `/profile/id=${id}`;
                        }}
                      >
                        <i className="fa-solid fa-circle-info mx-2"></i>More
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => DeleteUser(id)}
                      >
                        <i className="fa-solid fa-trash mx-2"></i>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default AllUser;
