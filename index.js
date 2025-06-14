 // Simulated database
const userDB = {
  phone: "1234",
  password: "test"
};

// Callback version of phone check
function checkPhone(phone, callback) {
  setTimeout(() => {
    if (phone === userDB.phone) {
      callback(null, true);
    } else {
      callback("Phone number not found", false);
    }
  }, 500);
}

// Promise version of password check
function checkPassword(password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === userDB.password) {
        resolve("Password matched");
      } else {
        reject("Wrong password");
      }
    }, 500);
  });
}

// Main login function
function login(event) {
  event.preventDefault();
  const enteredPhone = document.getElementById("num").value;
  const enteredPass = document.getElementById("pass").value;
  const result = document.getElementById("res");

  checkPhone(enteredPhone, (err, phoneMatched) => {
    if (err) {
      result.style.color = "red";
      result.innerText = err;
    } else {
      checkPassword(enteredPass)
        .then(msg => {
          result.style.color = "green";
          result.innerText = "Login Successful";
        })
        .catch(err => {
          result.style.color = "red";
          result.innerText = err;
        });
    }
  });
}
