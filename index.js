let express = require("express");

let app = express();

function getWelcomeMessage() {
  return `Welcome to our service!`;
}

app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetMessage(name) {
  return `Hello, ${name}!`;
}

app.get("/greet", (req, res) => {
  res.send(getGreetMessage(req.query.name));
});

function checkPassowrd(password) {
  if (password.length > 15) {
    return "Password is Strong";
  } else {
    return "Password is Weak";
  }
}

app.get("/check-password", (req, res) => {
  let password = req.query.password;

  res.send(checkPassowrd(password));
});

function getSum(a, b) {
  return a + b;
}

app.get("/sum", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  res.send(getSum(num1, num2).toString());
});

function getSubscriptionStatus(name, value) {
  if (value) {
    return name + " is subscribed";
  } else {
    return name + " is not subscribed";
  }
}

app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed === "true";

  res.send(getSubscriptionStatus(username, isSubscribed));
});

function getDiscountedPrice(price, discount) {
  return price - (price * discount) / 100;
}

app.get("/discounted-price", (req, res) => {
  let price = parseInt(req.query.price);
  let discount = parseInt(req.query.discount);

  res.send(getDiscountedPrice(price, discount).toString());
});

function getPersonalizedGreeting(age, gender, name) {
  return `Hello, ${name}! You are a ${age} year old ${gender}.`;
}

app.get("/personalized-greeting", (req, res) => {
  let age = parseInt(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;

  res.send(getPersonalizedGreeting(age, gender, name));
});

function getFinalPrice(price, discount, tax) {
  let discountedPrice = price - (price * discount) / 100;
  return discountedPrice + (discountedPrice * tax) / 100;
}

app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);

  res.send(getFinalPrice(price, discount, tax).toString());
});

function getTotalExerciseTime(exercise1, exercise2, exercise3) {
  return exercise1 + exercise2 + exercise3;
}

app.get("/total-exercise-time", (req, res) => {
  let runningTime = parseInt(req.query.running);
  let cyclingTime = parseInt(req.query.cycling);
  let swimmingTime = parseInt(req.query.swimming);

  res.send(
    getTotalExerciseTime(runningTime, cyclingTime, swimmingTime).toString(),
  );
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is Runnig on Port ${PORT}`);
});
