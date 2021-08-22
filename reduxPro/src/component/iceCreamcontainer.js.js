import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function iceCreamContainer(Props) {
  return (
    <div>
      <h2> Number of iceCreams -{Props.numOfIceCreams}</h2>
      <button onClick={Props.buyIceCreams}>Buy iceCream</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);
