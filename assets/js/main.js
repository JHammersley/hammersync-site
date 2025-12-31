(function () {
  // Highlight active nav link
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Update year in footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear().toString();
})();
