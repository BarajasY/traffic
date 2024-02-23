import { ParentComponent } from "solid-js";
import './Road.scss';
import { Road as R } from "~/types";

type props = R & {
  active: boolean
}

const Road: ParentComponent<props> = (props) => {

  const type = 
    props.direction === 'down' || 
    props.direction === 'up'
    ? 'vertical'
    : 'horizontal'
  
  return (
    <div 
      class={`road ${type}`}
      >
      {props.children}
      <h1 class={`amount ${props.direction}`}>{props.amount}</h1>
    </div>
  );
};

export default Road;