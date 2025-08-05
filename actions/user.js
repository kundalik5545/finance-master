"use server";
import prisma from "@/DB/db.config";

export const createNewUser = async () => {
  try {
    const createUser = await prisma.user.create({
      data: {
        firstName: "Kundalik",
        lastName: "Jadhav",
        email: "kundalik1@fm.com",
        phone: "7030640807",
      },
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
