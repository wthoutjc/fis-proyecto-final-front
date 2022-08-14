import { signOut } from "next-auth/react";

const logoutToken = async () => {
  fetch("/api/token/logout").then((res) => signOut());
};

export { logoutToken };
