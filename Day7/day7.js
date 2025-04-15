const userCard = document.getElementById("userCard");
const newUserBtn = document.getElementById("newUserBtn");

async function fetchRandomUser() {
  userCard.classList.add("loading");
  userCard.innerHTML = "<p>Loading user...</p>";

  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const user = data.results[0];

    const fullName = `${user.name.first} ${user.name.last}`;
    const location = `${user.location.city}, ${user.location.country}`;

    userCard.classList.remove("loading");
    userCard.innerHTML = `
      <img src="${user.picture.large}" alt="User Image" />
      <h2>${fullName}</h2>
      <p>📧 ${user.email}</p>
      <p>📍 ${location}</p>
    `;
  } catch (error) {
    userCard.innerHTML = "<p>Failed to load user. Please try again.</p>";
    userCard.classList.remove("loading");
  }
}

newUserBtn.addEventListener("click", fetchRandomUser);

// Load on first visit
fetchRandomUser();
