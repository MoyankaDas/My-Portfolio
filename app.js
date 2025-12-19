function openModal(id) { document.getElementById(id).style.display = "block"; }
    function closeModal(id) { document.getElementById(id).style.display = "none"; }
    window.onclick = function (e) { if (e.target.className === "modal") { e.target.style.display = "none"; } }



// function copyToClipboard(text) {
//     navigator.clipboard.writeText(text)
//       .then(() => alert("📧 Email copied to clipboard!"))
//       .catch(err => alert("❌ Failed to copy: " + err));
// }

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => showNeonPopup("📧 Email copied to clipboard!"))
        .catch(err => showNeonPopup("❌ Failed to copy: " + err));
}

// Neon popup function
function showNeonPopup(message) {
    const popup = document.createElement("div");
    popup.innerText = message;

    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.right = "20px";
    popup.style.padding = "15px 25px";
    popup.style.background = "rgba(0, 229, 255, 0.2)";
    popup.style.border = "2px solid #00e5ff";
    popup.style.color = "#fff";
    popup.style.fontSize = "1.1rem";
    popup.style.fontWeight = "bold";
    popup.style.borderRadius = "12px";
    popup.style.boxShadow = "0 0 15px #00e5ff, 0 0 25px #ff00ff";
    popup.style.backdropFilter = "blur(12px)";
    popup.style.zIndex = "2000";
    popup.style.animation = "popupFade 3s forwards";

    document.body.appendChild(popup);

    setTimeout(() => popup.remove(), 3000);
}

