import { createNewUser, getAllUsers } from "@/actions/user";
import { Button } from "@/components/ui/button";

const UserPage = async () => {
  const res = await getAllUsers();
  console.log(res);

  return (
    <div>
      <h1>Add New User Page</h1>
      <form action={createNewUser}>
        <Button type="submit">Create new user</Button>
      </form>

      <section className="bg-blue-50">
        {res.allUsers.map((user, i) => (
          <p key={i}>
            {user.firstName} - {user.lastName} - {user.phone}
          </p>
        ))}
      </section>
    </div>
  );
};

export default UserPage;
