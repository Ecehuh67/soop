import Filters from '../components/filters/filters';
import { render, RenderPosition, FilterTypes } from '../utils/consts';

export default class FiltersController {
  constructor() {
    this._currentFilter = null;
    this._filtersComponent = new Filters();

    this._onFilterChange = this._onFilterChange.bind(this);
    this._filtersComponent.setFilterChangeHandler(this._onFilterChange);
  }

  render() {
    const headerContainer = document.querySelector('.doc__header');

    render(headerContainer, this._filtersComponent, RenderPosition.AFTERBEGIN);
  }

  _onFilterChange(filterType) {
    const oldFilter = this._currentFilter;

    switch (filterType) {
      case FilterTypes.CARTOONS:
        this._currentFilter = FilterTypes.CARTOONS;
        break;
      case FilterTypes.FILMS:
        this._currentFilter = FilterTypes.FILMS;
        break;
      case FilterTypes.TV_SHOWS:
        this._currentFilter = FilterTypes.TV_SHOWS;
        break;
      case FilterTypes.DOCUMENTARY:
        this._currentFilter = FilterTypes.DOCUMENTARY;
        break;
    }

    if (!oldFilter) {
      this._filtersComponent.setActive(
        this._currentFilter,
        this._currentFilter
      );
    } else {
      this._filtersComponent.setActive(oldFilter, this._currentFilter);
    }
  }
}
