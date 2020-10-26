import { FiltersTypes } from '../../utils/consts';

export const createSortTemplate = () => {
  return `<ul class="doc__header-sorting-panel sorting-panel">
    <li class="sorting-panel__item" data-filter-type="${FiltersTypes.FILMS}" id="${FiltersTypes.FILMS}">${FiltersTypes.FILMS}</li>
    <li class="sorting-panel__item" data-filter-type="${FiltersTypes.FILMS}" id="${FiltersTypes.FILMS}">${FiltersTypes.TV_SHOWS}</li>
    <li class="sorting-panel__item" data-filter-type="${FiltersTypes.CARTOONS}" id="${FiltersTypes.CARTOONS}">${FiltersTypes.CARTOONS}</li>
    <li class="sorting-panel__item data-filter-type="${FiltersTypes.DOCUMENTARY}" id="${FiltersTypes.DOCUMENTARY}">${FiltersTypes.DOCUMENTARY}</li>
  </ul>`;
};
