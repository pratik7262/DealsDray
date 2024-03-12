export const login = async (username, password) => {
  const response = await fetch("http://localhost/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const json = await response.json();

  return json;
};

export const addEmployee = async (info, image) => {
  const response = await fetch("http://localhost/api/employee/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...info,
      image,
    }),
  });

  const json = await response.json();

  return json;
};
