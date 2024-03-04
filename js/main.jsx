const toggleSidebar = () => {
  if (localStorage.getItem("issamal") === "yse") {
    localStorage.setItem("issamal", "no");
    SidbarId.classList.remove("sidbar-samal");
  } else {
    localStorage.setItem("issamal", "yse");
    SidbarId.classList.add("sidbar-samal");
  }
};

if (localStorage.getItem("issamal") === "yse") {
    SidbarId.classList.add("sidbar-samal");
  } else {
    SidbarId.classList.remove("sidbar-samal");
  }
  