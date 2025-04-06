// ✅ Handle Login Form Submission
if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value.trim();

        // 🔐 Hardcoded login check
        if (email === "Ayush@gmail.com" && password === "Ayush") {
            alert("✅ Login successful as Ayush!");
            window.location.href = "afterlogin.html"; // Redirect to afterlogin.html
            return;
        }

        // 🧠 Fallback to normal backend login if not hardcoded
        try {
            const response = await fetch("http://127.0.0.1:3001/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok && data.success) {
                alert("✅ Login successful!");
                window.location.href = data.redirect;
            } else {
                alert(data.error || "❌ Invalid login credentials.");
            }
        } catch (error) {
            alert("❌ Something went wrong! Please try again.");
        }
    });
}
