const form = document.getElementById("contact-form") as HTMLFormElement;
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
const btnText = document.getElementById("btn-text") as HTMLSpanElement;
const spinner = document.getElementById("loading-spinner") as SVGSVGElement | null;
const statusContainer = document.getElementById("status-container") as HTMLDivElement;
const statusMsg = document.getElementById("status-message") as HTMLParagraphElement;

form.addEventListener("submit", async (e: SubmitEvent) => {
	e.preventDefault();

	// UI Feedback: Loading State
	submitBtn.disabled = true;
	btnText.textContent = "Transmitting...";
	spinner?.classList.remove("hidden");
	statusContainer.classList.add("opacity-0", "translate-y-2");

	const formData = new FormData(form);

	try {
		const response = await fetch("/send", {
			method: "POST",
			body: formData,
		});

		const result = await response.text();

		if (response.ok) {
			showStatus(result, "bg-green-500/10 text-green-400 border border-green-500/20");
			form.reset();
		} else {
			showStatus(
				result || "Delivery failed. Please try again.",
				"bg-red-500/10 text-red-400 border border-red-500/20",
			);
		}
	} catch (error) {
		console.error("Error:", error);
		showStatus(
			"Network connection error. Try again shortly.",
			"bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
		);
	} finally {
		submitBtn.disabled = false;
		btnText.textContent = "Send Message";
		spinner?.classList.add("hidden");
	}
});

function showStatus(text: string, classes: string) {
	statusMsg.textContent = text;
	statusMsg.className = `text-sm font-medium py-3 rounded-xl ${classes}`;
	statusContainer.classList.remove("opacity-0", "translate-y-2");
	statusContainer.classList.add("opacity-100", "translate-y-0");

	// Auto-hide success after 5 seconds
	if (classes.includes("green")) {
		setTimeout(() => {
			statusContainer.classList.add("opacity-0", "translate-y-2");
			statusContainer.classList.remove("opacity-100", "translate-y-0");
		}, 5000);
	}
}
