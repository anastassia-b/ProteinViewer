import values from 'lodash/values';

export const selectProtein = state => {
  const currentProtein = state.ui.currentProtein;
  if (currentProtein) {
    return values(state.proteins[currentProtein]);
  } else {
    return [];
  }
};

export const selectProteinInfo = (state, accession) => {
  if (!accession) {
    return undefined;
  }

  const protein = state.proteins[accession];
  const sequence = protein.sequence;

  return {
    accession: accession,
    id: protein.id,
    length: sequence.length,
    mass: sequence.mass,
    sequence: sequence.sequence
  }
}
