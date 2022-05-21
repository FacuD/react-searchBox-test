import { useEffect, useState } from "react";
import { User } from "./components/User/User";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { EmptyState } from "./components/EmptyState/EmptyState";
import "./App.css";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Fetch the users from the API
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setFilteredUsers(data.results);
      });
  }, []);

  // Filter the users based on the search query
  const filterUsers = (userName) => {
    const filtered = users.filter((user) => {
      return user.name.first.toLowerCase().includes(userName.toLowerCase());
    });
    setFilteredUsers(filtered);
  };

  return (
    <div className="App">
      <h1>Users Searcher</h1>
      <SearchBox handleChange={filterUsers} />
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <User name={user.name.first} />)
      ) : (
        <EmptyState message="No matches" />
      )}
    </div>
  );
};
