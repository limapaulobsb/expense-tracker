export default function AppReducer(state, { type, payload }) {
  switch (type) {
  case 'ADD_RECORD':
    return {
      ...state,
      records: [...state.records, payload]
    };
  case 'DELETE_RECORD':
    return {
      ...state,
      records: state.records.filter((element) => element.id !== payload),
    };
  default:
    return state;
  }
}
