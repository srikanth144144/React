import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(Props) {
  return (
    <div>
      <h2> Number of cakes -{Props.numOfCakes}</h2>
      <button onClick={Props.buyCake}>Buy cakes</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
