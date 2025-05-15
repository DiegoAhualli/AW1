const form = document.getElementById('login');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let userEmail = document.getElementById('email').value;
  let userPass = document.getElementById('pass').value;

  fetch('./data/users.json').then(res => res.json()).then(users => {
      const user = users.find(e => e.email === userEmail && e.pass === userPass);
      if (user) {
        // Session Storage
        console.log(user);
        window.location.href = 'http://127.0.0.1:5500/Storage/SessionStorage/private_pages/home.html';
      } else {
        document.getElementById('lblError').textContent = "Error al ingresar los datos";
      }
    });
});
