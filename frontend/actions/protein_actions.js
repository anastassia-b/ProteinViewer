export const RECEIVE_PROTEIN = "RECEIVE_PROTEIN";

export const fetchProtein = (id) => (
  $.ajax({
    method: 'GET',
    url: `https://www.ebi.ac.uk/proteins/api/proteins/${id}`
  })
);

export const receiveProtein = protein => ({
  type: RECEIVE_PROTEIN,
  protein: protein
});

export const requestProtein = (id) => (dispatch) => {
  return fetchProtein(id).then(protein => dispatch(receiveProtein(protein)));
};
