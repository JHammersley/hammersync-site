(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const notice = document.getElementById("formNotice");
  const submitBtn = document.getElementById("submitBtn");

  // ✅ OPTION A: Formspree endpoint (replace with your Formspree form endpoint)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  function showNotice(msg, isError = false) {
    notice.textContent = msg;
    notice.classList.add("show");
    notice.classList.toggle("error", isError);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    notice.classList.remove("show");

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    // Basic validation
    if (!payload.name || !payload.email || !payload.message) {
      showNotice("Please fill out Name, Email, and Message.", true);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Bad response");

      form.reset();
      showNotice("Thanks — your message was sent. We’ll get back to you shortly.");
    } catch (err) {
      showNotice("Something went wrong sending your message. Please try again or email us directly.", true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send inquiry";
    }
  });
})();
