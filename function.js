/**
 * age calculator
 * it'll return the age
 * @returns
 */

const inputdate = document.querySelector("#birthday");
function age() {
  let birthday = new Date(`${inputdate.value}`);
  let today = new Date().getTime();
  let ageyear = Math.floor((today - birthday) / 31536000000);
  return ageyear;
}

let gender = document.querySelector("#gndr");
function marageability() {
  let available;
  (age() >= (gender.value == "male" ? 21 : 18))
    ? (available = "yes")
    : (available = "no");
  return available;
}
