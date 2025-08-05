import { createNewUser, getAllUsers } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AddUserForm from "./_components/AddUserForm";

const UserPage = async () => {
  const res = await getAllUsers();
  console.log(res);

  return (
    <div className="container mx-auto p-2 md:p-3 ">
      <h1 className="text-xl md:text-2xl font-semibold pt-1 pb-3">
        Add New User
      </h1>

      <section className="add-user  pb-3">
        <form action={createNewUser}>
          <div className="firstname flex flex-col w-64 md:w-80 space-y-2 pb-2">
            <Label>Enter First Name</Label>
            <Input type="text" placeholder="Enter Name" />
          </div>

          <div className="lastName flex flex-col w-64 md:w-80 space-y-2 pb-2">
            <Label>Enter Last Name</Label>
            <Input type="text" placeholder="Enter Last Name" />
          </div>

          <div className="email flex flex-col w-64 md:w-80 space-y-2 pb-2">
            <Label>Enter Email</Label>
            <Input type="email" placeholder="Enter Email" />
          </div>

          <div className="firstname flex flex-col w-64 md:w-80 space-y-2 pb-2">
            <Label>Enter Phone</Label>
            <Input type="phone" placeholder="Enter Phone" />
          </div>

          <div className="buttons space-x-2">
            <Button type="reset">Cancel</Button>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </section>

      <section className="display-user block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  ">
        {res.allUsers.map((user, i) => (
          <p key={i}>
            {user.firstName} - {user.lastName} - {user.phone}
          </p>
        ))}
      </section>

      <section className="pt-5 pb-5">
        <AddUserForm />
      </section>
    </div>
  );
};

export default UserPage;
