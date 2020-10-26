import { FilterTypes, HIDDEN_CLASS } from '../../utils/consts';

export const createFilterTemplate = () => {
  return `<ul class="doc__header-sorting-panel sorting-panel">
    <li class="sorting-panel__item" data-filter-type="${FilterTypes.FILMS}" id="${FilterTypes.FILMS}">${FilterTypes.FILMS}</li>
    <li class="sorting-panel__item" data-filter-type="${FilterTypes.FILMS}" id="${FilterTypes.FILMS}">${FilterTypes.TV_SHOWS}</li>
    <li class="sorting-panel__item" data-filter-type="${FilterTypes.CARTOONS}" id="${FilterTypes.CARTOONS}">${FilterTypes.CARTOONS}</li>
    <li class="sorting-panel__item data-filter-type="${FilterTypes.DOCUMENTARY}" id="${FilterTypes.DOCUMENTARY}">${FilterTypes.DOCUMENTARY}</li>
  </ul>`;
};
