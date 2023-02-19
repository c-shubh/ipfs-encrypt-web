import { AuthProvider } from "@arcana/auth";

const auth = new AuthProvider(process.env.NEXT_PUBLIC_AUTHTOKENN, {
  theme: "light",
});

const getAuth = () => {
  return auth;
};

export { getAuth };
