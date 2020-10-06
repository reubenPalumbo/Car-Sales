import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions";

const AdditionalFeature = (props) => {
  return (
    <li>
      <button
        onClick={() => {
          props.addFeature(props.feature.id);
        }}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const state2Props = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
  };
};
export default connect(state2Props, { addFeature })(AdditionalFeature);
