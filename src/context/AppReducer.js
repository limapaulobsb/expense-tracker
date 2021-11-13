export default function AppReducer(state, { type, payload }) {
  switch (type) {
  case 'ADD_RECORD':
    return {
      ...state,
      records: [...state.records, payload ],
    };
  case 'DELETE_RECORD':
    return {
      ...state,
      records: state.records.filter((e) => e.id !== payload),
    };
  case 'SET_CURRENT_MONTH':
    return {
      ...state,
      monthDt: payload,
    };
  default:
    return state;
  }
}
