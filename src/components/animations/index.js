import React from "react";
import PropTypes from "prop-types";

export default function Animate(props) {
  const { animation, delay, animationFunction, duration } = props;
  return (
    <div
      data-sal={animation}
      data-sal-delay={delay}
      data-sal-easing={animationFunction}
      data-sal-duration={duration}
    >
      {props.children}
    </div>
  );
}

Animate.propTypes = {
  animation: PropTypes.string,
  delay: PropTypes.string,
  animationFunction: PropTypes.string,
  duration: PropTypes.string,
};

Animate.defaultProps = {
  animation: "slide-up",
  delay: "300",
  animationFunction: "ease",
  duration: "800",
};
