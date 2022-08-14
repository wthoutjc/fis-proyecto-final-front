import { signIn } from "next-auth/react";

interface Props {
  email: string;
  password: string;
}
const loginToken = ({ email, password }: Props) => {
  fetch(`/api/token/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => {
    signIn("credentials", { email, password });
  });
};

export { loginToken };
