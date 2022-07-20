import React from "react";
import "../App.css";
import { useGlobalContext } from "./Context";
const AddNew = () => {
  const { AddData, HandleChange, newUser } = useGlobalContext();
  return (
    <>
      <section className="user-form">
        <div className="form p-3">
          <form className="row g-3" onSubmit={AddData}>
            <div className="col-md-6">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="enter name"
                value={newUser.name}
                onChange={HandleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="enter username"
                value={newUser.username}
                onChange={HandleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email Id
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="enter user email id"
                value={newUser.email}
                onChange={HandleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="City" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                name="city"
                placeholder="enter city"
                onChange={HandleChange}
                value={newUser.city}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="street" className="form-label">
                street
              </label>
              <input
                type="text"
                className="form-control"
                name="street"
                placeholder="enter street"
                onChange={HandleChange}
                value={newUser.street}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="suit" className="form-label">
                suit
              </label>
              <input
                type="text"
                className="form-control"
                name="suit"
                placeholder="enter suit"
                onChange={HandleChange}
                value={newUser.suit}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="zipcode" className="form-label">
                zipcode
              </label>
              <input
                type="text"
                className="form-control"
                name="zipcode"
                placeholder="enter zipcode"
                onChange={HandleChange}
                value={newUser.zipcode}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="number"
                className="form-control"
                name="phone"
                placeholder="enter Phone"
                value={newUser.phone}
                onChange={HandleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="company" className="form-label">
                Company
              </label>
              <input
                type="text"
                className="form-control"
                name="company"
                placeholder="enter Company name"
                value={newUser.company}
                onChange={HandleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="website" className="form-label">
                Website
              </label>
              <input
                type="text"
                className="form-control"
                name="website"
                placeholder="enter Company Website name"
                value={newUser.website}
                onChange={HandleChange}
                required
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Add User
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default AddNew;
