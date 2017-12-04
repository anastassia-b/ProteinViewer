export const selectProteinIds = state => {
  if (state.proteins === undefined) {
    return [];
  } else {
    return Object.keys(state.proteins);
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
