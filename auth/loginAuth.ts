const loginAuth = async (email: string, password: string) => {
  const url = `${process.env.API_URL}/auth/login`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.status !== 201) {
      return null;
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { loginAuth };
