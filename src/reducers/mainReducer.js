import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

export const startState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const reducer = (state = startState, action) => {
  const getObj = () => {
    const temp = state.additionalFeatures.filter((item) => {
      return item.id === action.payload ? item : null;
    });
    return temp[0];
  };

  const removeObj = () => {
    const temp = state.car.features.filter((item) => {
      return item.id === action.payload ? null : item;
    });
    return temp;
  };

  const getPrice = () => {
    const tempItem = getObj();
    return tempItem.price;
  };

  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice + getPrice(),
        car: {
          ...state.car,
          features: [...state.car.features, getObj()],
        },
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - getPrice(),
        car: {
          ...state.car,
          features: removeObj(),
        },
      };
    default:
      return state;
  }
};
