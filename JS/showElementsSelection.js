
export function onOpenList (listId) {
  const input = document.getElementById(`choice__${listId}`);
  const options = document.getElementById(`${listId}`);
  const button = document.getElementById(`Search--${listId}`);

  input.addEventListener('focus', () => {
    options.style.display = 'flex';
    button.classList.add(`Search--${listId}`);
  });
}

export function onCloseList (listId) {
  const arrow = document.getElementById(`${listId}Arrow`);
  const options = document.getElementById(`${listId}`);
  const button = document.getElementById(`Search--${listId}`);

  arrow.addEventListener('click', () => {
    options.style.display = 'none';
    button.classList.remove(`Search--${listId}`);
  });
}

// openList('ingredients');
// openList('appliances');
// openList('ustensils');

// closeList('ingredients');
// closeList('appliances');
// closeList('ustensils');
