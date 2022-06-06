const register = (email, username, password) => {
  const user = {
    email,
    username,
    password,
  };

  let users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    localStorage.setItem("users", JSON.stringify([user]));
    return;
  }

  users = [...users, user];
  localStorage.setItem("users", JSON.stringify(users));
};

const login = (email, password) => {
  console.log("login");
  const users = JSON.parse(localStorage.getItem("users"));

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  console.log(user);

  if (!user) {
    alert("invalid email & password");
    return;
  }

  localStorage.setItem("auth", JSON.stringify(user));
  window.location.href = "./index.html";
};

const logout = () => {
  localStorage.removeItem("auth");
  window.location.href = "./index.html";
};
