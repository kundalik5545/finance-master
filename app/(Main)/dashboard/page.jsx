import React from "react";

const DashboarPage = () => {
  const users = [
    { firstName: "kundalik", lastName: "jadhav" },
    { firstName: "akshay", lastName: "jadhav" },
  ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard Pagesssssss</h1>

      {users.map((user, i) => (
        <p key={i}>
          {user.firstName} - {user.lastName}{" "}
        </p>
      ))}
    </div>
  );
};

export default DashboarPage;
