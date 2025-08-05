import React from "react";

const DashboarPage = () => {
  const users = [
    { firstName: "kundalik", lastName: "jadhav" },
    { firstName: "akshay", lastName: "jadhav" },
  ];
  return (
    <div>
      <h1>Dashboard Page</h1>

      {users.map((user, i) => (
        <p key={i}>
          {user.firstName} - {user.lastName}{" "}
        </p>
      ))}
    </div>
  );
};

export default DashboarPage;
