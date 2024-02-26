import { Component } from "solid-js";
import './Automobile.scss';

type props = {
  color?: string,
  size?: string
}

const Automobile: Component<props> = (props) => {

  const size = props.size?? '20px'
  
  return (
    <div class="automobile" style={{
      background: props.color,
      height: props.size,
      width: props.size
    }}>

    </div>
  );
};

export default Automobile;