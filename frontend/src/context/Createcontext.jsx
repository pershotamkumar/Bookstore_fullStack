import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export function DataProvider({ children }) {

  const initialAuthUser = localStorage.getItem("Users");

  const [AuthUser, SetAuthUser] = useState(() => {
    try {
      return initialAuthUser ? JSON.parse(initialAuthUser) : null;
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      return null;
    }
  });

  // ✅ Jab bhi AuthUser update ho, `localStorage` ko bhi update karo
  useEffect(() => {
    if (AuthUser) {
      localStorage.setItem("Users", JSON.stringify(AuthUser));
    } else {
      localStorage.removeItem("Users");
    }
  }, [AuthUser]);
  // console.log("AuthUser:", JSON.stringify(AuthUser, null, 2));

  const [data, setData] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      const res = await axios.get("http://localhost:8086/book");
      // console.log(res.data);
      // setbook(res.data)
      setData(() => (res.data.filter((item) => item.category === 'free')))
    }
    getbook();
  }, [])

  return (
    <DataContext.Provider value={{ data, setData, AuthUser, SetAuthUser }}>
      {children}
    </DataContext.Provider>
  );
}
