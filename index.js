window.onload = function () {
  const storedValue = localStorage.getItem("test");
  console.log(storedValue, "1");
  document.getElementById("test").textContent = storedValue || "";
};

let sec = 1;
const intervalId = setInterval(() => {
  document.getElementById("time").textContent = `${sec++} : second`;
  const storedValue1 = localStorage.getItem("test");
  console.log(storedValue1, "2");
  document.getElementById("test2").textContent = storedValue1 || "";
  if (storedValue1) {
    clearInterval(intervalId);
  }
}, 1000);
