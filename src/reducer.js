//set token to null after debugging

export const initialState = {
  user: null,
  token:'BQBPDW9vqDrohMI5npWQsScMuKSD1lGqoF-EAQ28HcGsBSVeB2-zk2rKkfPeyLmTq24uCa6eolEi1BL4CxQ_2Be7c_jVhd16hPFhYz5ppSevwJjYdbTPDCZFst66ubnwIH7KMBPR1nCRgrxSA50MH02LYKp8E3VIFiD471Ks7II8GU-FbPVS',
  playlists: [],
  playing: false,
  item: null,
}; 

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
      };
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
    default:
      return state;
  }
}

export default reducer;