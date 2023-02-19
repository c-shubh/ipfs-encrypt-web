import { AuthProvider } from "@arcana/auth";

const auth = new AuthProvider(process.env.NEXT_PUBLIC_AUTHTOKEN, {
  theme: "light",
});
// console.log("wo" + process.env.NEXT_PUBLIC_AUTHTOKEN);

const getAuth = () => {
  return auth;
};

export { getAuth };
