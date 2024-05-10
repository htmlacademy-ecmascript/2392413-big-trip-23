import { updateEvent } from '../common';
import {
  DEFAULT_EVENT_PROPS,
  EditFormMode,
  EventStateAction,
  FilterType,
} from '../const';
import { RenderPosition, render } from '../framework/render';
import EventItemView from '../view/event-item-view';
import EventsListView from '../view/events-list-view';
import NoEventView from '../view/no-event-view';
import SortView from '../view/sort-view';
import EventEngine from './event-engine';

export default class EventPresenter {
  #sortComponent = new SortView();
  #eventListComponent = new EventsListView();
  #container = null;
  #eventsModel = null;
  #events = null;
  #cities = null;
  #activeEventEditForm = null;
  #newEventButtonElement = null;
  #eventPresenters = new Map();

  constructor({ container, eventsModel, newEventButtonElement }) {
    this.#container = container;
    this.#eventsModel = eventsModel;
    this.#newEventButtonElement = newEventButtonElement;
  }

  #setActiveEventEditForm = (value) => {
    this.#activeEventEditForm = value;
    this.#newEventButtonElement.disabled = this.#isNewEventFormActive();

    if (this.#activeEventEditForm) {
      document.addEventListener('keydown', this.#onEscKeyDown);
    } else {
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#activeEventEditForm.resetEditForm();
    }
  };

  #isNewEventFormActive = () => {
    if (!this.#activeEventEditForm) {
      return false;
    }
    return this.#activeEventEditForm.formMode === EditFormMode.NEW;
  };

  #eventEditStateChange = (event, stateAction) => {
    if (
      (event.formMode === EditFormMode.NEW &&
        stateAction === EventStateAction.CREATE_NEW_FORM) ||
      stateAction === EventStateAction.OPEN_EDIT_FORM
    ) {
      this.#openEditForm(event);
    } else {
      if (event.formMode === EditFormMode.NEW) {
        event.destroy();
      } else {
        event.switchToView();
      }
      this.#setActiveEventEditForm(null);
    }
  };

  #onEventDataChange = (event) => {
    this.#events = updateEvent(this.#events, event);
    this.#eventPresenters.get(event.id).init(event);
  };

  #openEditForm = (event) => {
    if (this.#activeEventEditForm) {
      this.#activeEventEditForm.resetEditForm();
    }

    event.switchToEdit();
    this.#setActiveEventEditForm(event);
  };

  #renderEventItem = (formMode, callback) => {
    const itemComponent = new EventItemView();
    render(
      itemComponent,
      this.#eventListComponent.element,
      formMode === EditFormMode.NEW
        ? RenderPosition.AFTERBEGIN
        : RenderPosition.BEFOREEND
    );
    callback(itemComponent);
  };

  #renderEventNew = () => {
    this.#renderTripPoint(DEFAULT_EVENT_PROPS, EditFormMode.NEW);
  };

  #renderTripPoint = (event, formMode) => {
    this.#renderEventItem(formMode, (container) => {
      const eventEngine = new EventEngine({
        event,
        eventsModel: this.#eventsModel,
        cities: this.#cities,
        container,
        onStateChange: this.#eventEditStateChange,
        onDataChange: this.#onEventDataChange,
        formMode,
      });
      this.#eventPresenters.set(event.id, eventEngine);
    });
  };

  #renderTripPoints = () => {
    for (let i = 0; i < this.#events.length; i++) {
      this.#renderTripPoint(this.#events[i], EditFormMode.EDIT);
    }
  };

  #renderTripBoard = () => {
    if (this.#events.length === 0) {
      render(
        new NoEventView({ currentFilter: FilterType.EVERYTHING }),
        this.#container
      );
      return;
    }
    render(this.#sortComponent, this.#container);
    render(this.#eventListComponent, this.#container);
    this.#renderTripPoints();
  };

  init = () => {
    this.#events = [...this.#eventsModel.events];
    this.#cities = [...this.#eventsModel.cities];
    this.#renderTripBoard();
    this.#newEventButtonElement.addEventListener('click', () =>
      this.#renderEventNew()
    );
  };
}
