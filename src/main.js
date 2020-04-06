const TASK_COUNT = 3;

import {createSiteMenuTemplate as createSiteMenuTemplate} from './components/siteMenuTemplate.js';
import {createFiltersTemplate as createFiltersTemplate} from './components/filtersTemplate.js';
import {createBoardTemplate as createBoardTemplate} from './components/boardTemplate.js';
import {createTaskEditTemplate as createTaskEditTemplate} from './components/taskEditTemplate.js';
import {createTaskTemplate as createTaskTemplate} from './components/taskTemplate.js';
import {createLoadMoreButtonTemplate as createLoadMoreButtonTemplate} from './components/loadMoreButtonTemplate.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFiltersTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const tasksListElement = siteMainElement.querySelector(`.board__tasks`);
render(tasksListElement, createTaskEditTemplate(), `beforeEnd`);
for (let i = 0; i < TASK_COUNT; i++) {
  render(tasksListElement, createTaskTemplate(), `beforeend`);
}
const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
