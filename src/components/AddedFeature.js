import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => {
          props.removeFeature(props.feature.id);
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const state2Props = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
  };
};
export default connect(state2Props, { removeFeature })(AddedFeature);
