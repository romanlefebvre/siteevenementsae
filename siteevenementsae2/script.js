let currentLanguage = 'fr';

function toggleLanguage() {
  // Alterne la langue : fr -> en, ou en -> fr
  currentLanguage = (currentLanguage === 'fr') ? 'en' : 'fr';

  // Pour chaque élément à traduire, on remplace son texte
  document.querySelectorAll('.translate').forEach(elem => {
    let newText = elem.getAttribute('data-' + currentLanguage);
    if (newText) {
      elem.textContent = newText;
    }
  });
}

// On écoute le changement de la checkbox
document.getElementById('checkboxInput').addEventListener('change', toggleLanguage);
