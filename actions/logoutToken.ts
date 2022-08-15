import { signOut } from "next-auth/react";

const logoutToken = async () => {
  fetch("/api/token/logout").then((res) => {
    console.log(res);
    return signOut();
  });
};

export { logoutToken };
