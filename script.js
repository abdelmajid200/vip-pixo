// Placeholder for future interactivity or animations
console.log("Pixo VIP script loaded.");

function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const barber = document.querySelector('input[name="barber"]:checked')?.value;

  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name || !barber || !service || !date || !time) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  const message = `Bonjour, je m'appelle ${name}, je souhaite réserver le service "${service}" avec le coiffeur "${barber}" le ${date} à ${time}.`;
  const phone = "212620480920";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

