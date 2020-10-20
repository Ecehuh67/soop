export const SortTypes = {
  FILMS: 'Films',
  TV_SHOWS: 'TV Shows',
  CARTOONS: 'Cartoons',
  DOCUMENTARY: 'Documentary',
};

export const createSortTempalte = () => {
  const sortList = Object.keys(SortTypes)
    .map((type) => `<li class="sorting-panel__item">${SortTypes[type]}</li>`)
    .join('');

  return `
    <ul class="doc__header-sorting-panel sorting-panel">
      ${sortList}
    </ul>
    `;
};
