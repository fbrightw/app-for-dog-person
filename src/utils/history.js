import { createHashHistory } from 'history';

export default () => {

  const history = createHashHistory();

  const push = (location) => {
    history.push(location)
  }

  return {
    ...history,
    push,
    location
  }
}