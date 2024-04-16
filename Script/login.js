const login_button = document.getElementById("login-btn");

console.log("okayyyyyyyyyyyyyy");

const login_func = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:8081/api/users/login",
      data: {
        email: email,
        password: password,
      },
    });
    document.cookie = `jwt=${res.data.token}`;
    localStorage.setItem("jwt", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    console.log(res.data.user.role);
    if (res.data.user.role == "admin") {
      window.location.href = "/Dashboard";
    }
    else{
      window.location.reload();
    }
    getLoginToken();
  } catch (e) {
    console.log(e.response, "error");
  }
};
// const user=localStorage.getItem("user");
// if (user.role == "admin") {
//     window.location.href = "/Dashboard";
//   }

login_button.addEventListener("click", () => {
  console.log("Working on login");
  const login_email = document.getElementById("contact-emaill").value;
  const login_password = document.getElementById("password").value;
  login_func(login_email, login_password);
});

const getLoginToken = () => {
  const name = "jwt";
  let cookie;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      cookie = cookie.substring(name.length, cookie.length);
    } else {
      cookie = "";
    }
  }
};

const signup_func = async (name, email, password, confirmPassword) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:8081/api/users/signup",
      data: {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },
    });
    document.cookie = `jwt=${res.data.token}`;
    localStorage.setItem("jwt", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.data.User));
    console.log(res.data);
    getLoginToken();
    console.log(res.data.data.User);
    if (res.data.data.User.role == "admin") {
      window.location.href = "/Dashboard";
    } else {
      window.location.reload();
      const login_nav = document.getElementById("login_nav");
      login_nav.innerHTML = "Logout";
    }
  } catch (e) {
    console.log(e.response.data);
  }
};

const signup_button = document.getElementById("signup_btn");
signup_button.addEventListener("click", () => {
  const name = document.getElementById("signup-Full-name").value;
  const signup_email = document.getElementById("signup-email").value;
  const signup_password = document.getElementById("signup-password").value;
  const signup_confirmPassword = document.getElementById(
    "signup-confirmPassword"
  ).value;

  signup_func(name, signup_email, signup_password, signup_confirmPassword);
});

const message_func = async (firstname, lastname, email, phone, message) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:8081/api/messages/",
      data: {
        firstname,
        lastname,
        email,
        phone,
        message,
      },
    });
    console.log(res.data.message);
    alert(res.data.message);
  } catch (e) {
    console.log(e.response.data);
    alert(e.response.data.message);
  }
};

const message_button = document.getElementById("btn");
message_button.addEventListener("click", () => {
  const firstname = document.getElementById("contact-name").value;
  const lastname = document.getElementById("contact-lname").value;
  const email = document.getElementById("contact-email").value;
  const phone = document.getElementById("contact-phone").value;
  const message = document.getElementById("contact-message").value;
  message_func(firstname, lastname, email, phone, message);
});

const comment_func = async (comment) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:8081/api/messages/",
      data: {
        comment,
      },
    });
    console.log(res.data.message);
    alert(res.data.message);
  } catch (e) {
    console.log(e.response.data);
    alert(e.response.data.message);
  }
};

const comment_func1 = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:8081/api/66178bc6736a6162a05ee56b/comment",
    });
    console.log(res.data);
  } catch (e) {
    console.log(e.response);
  }
};

comment_func1();

const comment_button = document.getElementById("confirm-button");
message_button.addEventListener("click", () => {
  message_func(firstname, lastname, email, phone, message);
});

comment_func1();
