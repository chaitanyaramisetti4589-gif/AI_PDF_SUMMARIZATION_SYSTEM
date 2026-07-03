const form = document.getElementById("uploadForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const pdf = document.getElementById("pdf").files[0];
    const email = document.getElementById("email").value.trim();

    // Validation
    if (!pdf) {
        status.innerHTML = "❌ Please select a PDF.";
        return;
    }

    if (!email) {
        status.innerHTML = "❌ Please enter your email address.";
        return;
    }

    // Create FormData
    const formData = new FormData();
    formData.append("pdf", pdf);
    formData.append("email", email);

    try {
        status.innerHTML = "⏳ Processing your document...";

        const response = await fetch(
            "https://robojet.app.n8n.cloud/webhook-test/d3a77f2e-b31f-4c6f-bbf4-0e670e9aa0ba",
            {
                method: "POST",
                body: formData
            }
        );

        if (!response.ok) {
            throw new Error(`Server Error: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
            status.innerHTML = `✅ ${data.message}`;
            form.reset();
        } else {
            status.innerHTML = "❌ Something went wrong.";
        }

    } catch (error) {
        console.error(error);
        status.innerHTML = "❌ Failed to process document.";
    }
});