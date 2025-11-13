// Very basic click tracking stub
document.addEventListener("click", function (event) {
  const target = event.target.closest("[data-offer]");
  if (!target) return;

  const offerId = target.getAttribute("data-offer") || "unknown";
  const ts = new Date().toISOString();

  // For now just log. Later, send to your endpoint or analytics.
  console.log("Offer click:", { offerId, ts });

  // Example POST (when you build a backend):
  // fetch("https://your-endpoint.example/track", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ offerId, ts }),
  // }).catch(() => {});
});
