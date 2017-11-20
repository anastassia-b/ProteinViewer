import values from 'lodash/values';

export const selectProtein = state => {
  const currentProtein = state.ui.currentProtein;
  if (currentProtein) {
    return values(state.proteins[currentProtein]);
  } else {
    return [];
  }
};
