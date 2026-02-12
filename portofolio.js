document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("contactForm not found");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        const oldMsg = form.querySelector(".success-message");
        if (oldMsg) oldMsg.remove();
        const successMsg = document.createElement("p");
        successMsg.textContent = "Message sent successfully!";
        successMsg.style.color = "green";
        successMsg.style.marginTop="10px";
        form.appendChild(successMsg);
        form.reset();
      } else {
        alert("Error sending message");
      }
    } catch (err) {
      console.error(err);
      alert("Server not responding");
    }
  });
});