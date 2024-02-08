window.onload = function () {
  const storedValue = localStorage.getItem("test");

  document.getElementById("test").textContent = storedValue || "";
};
