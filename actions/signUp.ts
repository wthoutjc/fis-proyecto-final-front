// Auth
import { loginToken } from "../actions";

// Interface
interface Props {
  email: string;
  name: string;
  lastname: string;
  password: string;
  password2: string;
}

const signUp = ({ email, name, lastname, password }: Props) => {
  fetch(`/api/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      name,
      lastname,
      password,
    }),
  }).then((res) => {
    if (res.status === 201) {
      loginToken({ email, password });
    }
  });
};

export { signUp };
