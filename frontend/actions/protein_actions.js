export const RECEIVE_PROTEIN = "RECEIVE_PROTEIN";
export const START_LOADING = "START_LOADING";

export const startLoading = () => ({
  type: START_LOADING
});

export const receiveProtein = protein => ({
  type: RECEIVE_PROTEIN,
  protein: protein
});

export const fetchProtein = (id) => (
  $.ajax({
    method: 'GET',
    url: `https://www.ebi.ac.uk/proteins/api/proteins/${id}`
  })
);

export const requestProtein = (id) => (dispatch) => {
  dispatch(startLoading());
  return fetchProtein(id).then(protein => dispatch(receiveProtein(protein)));
};
