import AbstractView from '../framework/view/abstract-view';

export default class EventItemView extends AbstractView {
  get template() {
    return '<li class="trip-events__item"></li>';
  }
}
