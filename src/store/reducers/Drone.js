import * as actions from "../actions";

const initialState = {
  data: []
};
const saveDroneToStore = (state, action) => {
  return {
    ...state, data: action.data.map(item => {
      const timestamp = `${new Date(item.timestamp).getHours()}:${new Date(item.timestamp).getMinutes()}`;
      return { timestamp, 
        accuracy: parseInt(item.accuracy.toFixed()),
        latitude:item.latitude.toFixed(3),
        longitude:item.longitude.toFixed(3) }
    })
  };
};

const handlers = {
  [actions.STORE_DRON]: saveDroneToStore
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
