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

function openDropdown (listId) {
  const openDropdown = document.querySelector('.openedDropdown');
  const dropdown = document.getElementById(`${listId}__dropdown`);
  const button = document.getElementById(`Search--${listId}`);
  const input = document.getElementById(`choice__${listId}`);
  if (!openDropdown) {
    dropdown.style.display = 'flex';
    input.classList.add('openedDropdown');
    button.classList.add(`Search--${listId}`);
    openArrow(listId);
  } else {
    closeDropdown(openDropdown.id.replaceAll('choice__', ''));
    dropdown.style.display = 'flex';
    input.classList.add('openedDropdown');
    button.classList.add(`Search--${listId}`);
    openArrow(listId);
  }
}

export function closeDropdown (listId) {
  const openDropdown = document.querySelector('.openedDropdown');
  const dropdown = document.getElementById(`${listId}__dropdown`);
  const button = document.getElementById(`Search--${listId}`);
  const input = document.getElementById(`choice__${listId}`);
  if (openDropdown) {
    dropdown.style.display = 'none';
    input.classList.remove('openedDropdown');
    button.classList.remove(`Search--${listId}`);
    closeArrow(listId);
  }
}
// == Ouverture de la dropdown au clic/focus sur l'input ===
function onOpenList (listId) {
  const input = document.getElementById(`choice__${listId}`);
  input.addEventListener('focus', () => {
    openDropdown(listId);
  });
}

// == Fermeture de la dropdown au clic sur la flèche ===
function onCloseList (listId) {
  const arrow = document.getElementById(`${listId}Arrow`);
  // const openDropdown = document.querySelector('.openedDropdown');

  arrow.addEventListener('click', () => {
    closeDropdown(listId);
  });
}

// === Changement de direction de la flèche à l'ouverture de la dropdown ===
function openArrow (listId) {
  const arrow = document.getElementById(`${listId}Arrow`);
  arrow.classList.remove('fa-chevron-down');
  arrow.classList.add('fa-chevron-up');
  // arrow.setAttribute('id', `${listId}ArrowOpen`);
};

// === Changement de direction de la flèche à la fermeture de la dropdown ===
export function closeArrow (listId) {
  const arrow = document.getElementById(`${listId}Arrow`);
  arrow.classList.remove('fa-chevron-up');
  arrow.classList.add('fa-chevron-down');
};
