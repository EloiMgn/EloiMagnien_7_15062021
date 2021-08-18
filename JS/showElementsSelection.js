export function onOpenDropdown () {
  onOpenList('ingredients');
  onOpenList('appliances');
  onOpenList('ustensils');
}

export function onCloseDropdown () {
  onCloseList('ingredients');
  onCloseList('appliances');
  onCloseList('ustensils');
}

// == Ouverture de la dropdown au clic/focus sur l'input ===
function onOpenList (listId) {
  const input = document.getElementById(`choice__${listId}`);
  const dropdown = document.getElementById(`${listId}__dropdown`);
  const button = document.getElementById(`Search--${listId}`);

  input.addEventListener('focus', () => {
    const openDropdown = document.querySelector('.openedDropdown');
    if (!openDropdown) {
      dropdown.style.display = 'flex';
      input.classList.add('openedDropdown');
      button.classList.add(`Search--${listId}`);
      openArrow(listId);
    }
  });
}

// == Fermeture de la dropdown au clic sur la flèche ===
function onCloseList (listId) {
  const input = document.getElementById(`choice__${listId}`);
  const arrow = document.getElementById(`${listId}Arrow`);
  const dropdown = document.getElementById(`${listId}__dropdown`);
  const button = document.getElementById(`Search--${listId}`);

  arrow.addEventListener('click', () => {
    dropdown.style.display = 'none';
    input.classList.remove('openedDropdown');
    button.classList.remove(`Search--${listId}`);
    closeArrow(listId);
  });
}

// === Changement de direction de la flèche à l'ouverture de la dropdown ===
function openArrow (listId) {
  const arrow = document.getElementById(`${listId}Arrow`);
  arrow.classList.remove('fa-chevron-down');
  arrow.classList.add('fa-chevron-up');
};

// === Changement de direction de la flèche à la fermeture de la dropdown ===
export function closeArrow (listId) {
  const arrow = document.getElementById(`${listId}Arrow`);
  arrow.classList.remove('fa-chevron-up');
  arrow.classList.add('fa-chevron-down');
};
