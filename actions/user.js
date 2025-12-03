"use server";
import prisma from "@/DB/db.config";

export const createNewUser = async (data) => {
  try {
    const createUser = await prisma.user.create({
      data,
    });

    return { success: true, message: "user created!!", newUser: createUser };
  } catch (err) {
    console.error(err);
    throw new Error("Issue while creating new user.");
  }
};

export const getAllUsers = async () => {
  try {
    const allUsers = await prisma.user.findMany();
    return { success: true, message: "user fetched!!", allUsers };
  } catch (err) {
    console.error(err);
    throw new Error("Issue while creating new user.");
  }
};
