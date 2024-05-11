import EventsModel from './model/events-model';
import EventPresenter from './presenter/event-presenter';
import FilterPresenter from './presenter/filter-presenter';
import TripPresenter from './presenter/trip-presenter';

const headerContainer = document.querySelector(
  '.page-header .page-header__container'
);
const tripContainerElement = headerContainer.querySelector('.trip-main');
const tripControlElement = headerContainer.querySelector(
  '.trip-controls__filters'
);

const eventsContainerElement = document.querySelector(
  '.page-main .trip-events'
);
const newEventButtonElement = document.querySelector(
  '.trip-main__event-add-btn'
);

const eventsModel = new EventsModel();

const tripPresenter = new TripPresenter({
  container: tripContainerElement,
  eventsModel,
});
const filterPresenter = new FilterPresenter({
  container: tripControlElement,
  eventsModel,
});
const eventPresenter = new EventPresenter({
  container: eventsContainerElement,
  eventsModel,
  newEventButtonElement: newEventButtonElement,
});

tripPresenter.init();
filterPresenter.init();
eventPresenter.init();
