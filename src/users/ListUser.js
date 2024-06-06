import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2")
      .then(response => {
        setUsers(response.data.data);
        console.log(users)
      })
      .catch(error => {
        console.error(`Error fetching data: ${error}`);
      });
    const userData = {
      tenDangNhap: "10001",
      matKhau: "1111"
    };
    axios.post("http://localhost:8080/SinhVien/login", userData)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error(`Error fetching data: ${error}`);
      });
  }, []);


  return (
    <div>
      <h1>List of Users</h1>
      <div>
        {users && users.length > 0 && users.map((user, index) => {
          return (
            <div key={index}>
              {index + 1} - {user.first_name} {user.last_name}
            </div>
          )
        })
        }
      </div>
    </div>
  );

}