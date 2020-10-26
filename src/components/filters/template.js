import { FilterTypes, HIDDEN_CLASS } from '../../utils/consts';

export const createFilterTemplate = () => {
  return `<ul class="doc__header-sorting-panel sorting-panel">
    <li class="filter-panel__item" data-filter-type="${FilterTypes.FILMS}" id="filter__${FilterTypes.FILMS}">${FilterTypes.FILMS}</li>
    <li class="filter-panel__item" data-filter-type="${FilterTypes.TV_SHOWS}" id="filter__${FilterTypes.TV_SHOWS}">${FilterTypes.TV_SHOWS}</li>
    <li class="filter-panel__item" data-filter-type="${FilterTypes.CARTOONS}" id="filter__${FilterTypes.CARTOONS}">${FilterTypes.CARTOONS}</li>
    <li class="filter-panel__item" data-filter-type="${FilterTypes.DOCUMENTARY}" id="filter__${FilterTypes.DOCUMENTARY}">${FilterTypes.DOCUMENTARY}</li>
  </ul>`;
};
