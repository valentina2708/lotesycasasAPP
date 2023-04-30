
import useScrollTrigger from "@mui/material/useScrollTrigger";

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger();

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "black" : "transparent",
      transition: trigger ? "0.5s" : "2.5s",
      boxShadow: "none",
      padding: "10px 0px"
    }
  });
};

const ScrollToColor = props => {
  return <ScrollHandler {...props}>{props.ScrollHandler}</ScrollHandler>;
};

export default ScrollToColor;