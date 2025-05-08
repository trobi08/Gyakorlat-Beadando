<script>
  document.addEventListener("DOMContentLoaded", function () {
    const text = "Üdvözöljük a Szecskázó Kft.-nél!";
    const el = document.getElementById("typewriter-text");
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
      }
    }

    typeWriter();
  });
</script>





document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("megrendelesForm");

  form.addEventListener("submit", function (e) {
    let isValid = true;

    // Mezők beolvasása
    const nev = document.getElementById("nev");
    const munka = document.getElementById("munka");
    const terulet = document.getElementById("terulet");
    const email = document.getElementById("email");

    // Legalább 10 karakteres szövegek
    [nev, munka, terulet].forEach(field => {
      if (field.value.trim().length < 10) {
        isValid = false;
        field.classList.add("is-invalid");
      } else {
        field.classList.remove("is-invalid");
      }
    });

    // Email ellenőrzés
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      isValid = false;
      email.classList.add("is-invalid");
    } else {
      email.classList.remove("is-invalid");
    }

    if (!isValid) {
      e.preventDefault();
      alert("Kérlek tölts ki minden mezőt helyesen! (min. 10 karakter a szövegeknél, érvényes email)");
    }
  });
});
