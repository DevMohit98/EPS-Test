import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    city: "",
    street: "",
    suit: "",
    zipcode: "",
    phone: "",
    company: "",
    website: "",
  });
  const AddData = (e) => {
    e.preventDefault();
    let info = {
      name: newUser.name,
      username: newUser.username,
      email: newUser.username,
      address: {
        city: newUser.city,
        street: newUser.street,
        suit: newUser.suit,
        zipcode: newUser.zipcode,
      },
      phone: newUser.phone,
      company: {
        name: newUser.company,
      },
      website: newUser.website,
    };
    const oldList = JSON.parse(localStorage.getItem("addedUser")) || [];
    const updatedList = [...user, ...oldList];
    const updatedUser = {
      ...info,
      id: updatedList.length + 1,
    };
    const newList = [...oldList, updatedUser];
    localStorage.setItem("addedUser", JSON.stringify(newList));
    window.location.href = "/allusers";
  };
  const HandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  const fetchUserData = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const oldList = JSON.parse(localStorage.getItem("addedUser")) || [];
        setUser([...res.data, ...oldList]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <AppContext.Provider
      value={{ user, AddData, newUser, HandleChange, setUser }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
