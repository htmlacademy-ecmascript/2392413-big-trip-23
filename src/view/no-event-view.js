import AbstractView from '../framework/view/abstract-view';

export default class NoEventView extends AbstractView {
  get template() {
    return '<p class="trip-events__msg">Click New Event to create your first point</p>';
  }
}
/*
Значение отображаемого текста зависит от выбранного фильтра:
* Everthing – 'Click New Event to create your first point'
* Past — 'There are no past events now';
* Present — 'There are no present events now';
* Future — 'There are no future events now'.
*/
