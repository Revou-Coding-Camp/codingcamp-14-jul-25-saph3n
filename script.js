document.addEventListener("DOMContentLoaded", () => {
  // Bagian popup
  const popup = document.getElementById("popup");
  const submitBtn = document.getElementById("submit-btn");
  const usernameInput = document.getElementById("username-input");
  const usernameSpan = document.getElementById("username");


  submitBtn.addEventListener("click", () => {
    const name = usernameInput.value.trim();
    if (name) {
      usernameSpan.textContent = name;
      popup.style.display = "none";

      // Scroll ke welcome section
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    } else {
      alert("Isi namanya dulu ya 🥺");
    }
  });

  // Bagian profile nav
  const navProfile = document.getElementById("navProfile");
  const profileSection = document.getElementById("profileSection");
  const closeProfile = document.getElementById("closeProfile");

  navProfile.addEventListener("click", (e) => {
    e.preventDefault();
    profileSection.classList.remove("translate-x-full");
  });

  closeProfile.addEventListener("click", () => {
    profileSection.classList.add("translate-x-full");
  });

  // Bagian message form
  const form = document.getElementById('messageForm');
  const output = document.getElementById('output');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const pesan = document.getElementById('pesan').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const currentTime = new Date().toString();


    document.getElementById('currentTime').textContent = currentTime;
    document.getElementById('outputNama').textContent = nama;
    document.getElementById('outputTanggal').textContent = tanggal;
    document.getElementById('outputGender').textContent = gender;
    document.getElementById('outputPesan').textContent = pesan;

    output.classList.remove('hidden');
  });

  const navPortfolio = document.getElementById("navPortofolio");
  const portfolioSection = document.getElementById("portofolioSection");
  
  navPortfolio.addEventListener("click", (e) => {
    e.preventDefault();
    portfolioSection.scrollIntoView({ behavior: "smooth" });
});

const navMessageus = document.getElementById("navMessageus");
const messageSection = document.getElementById("messageusSection");

navMessageus.addEventListener("click", (e) => {
  e.preventDefault();
  messageSection.scrollIntoView({ behavior: "smooth" });
});
});
