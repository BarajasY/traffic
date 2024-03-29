import { Component } from "solid-js";
import './StopLight.scss';
import { Road } from "~/types";

type props = Road & {
  active: boolean
  identifier: number
}

const StopLight: Component<props> = (props) => {
  
  const enabled:string = props.active ? 'active' : 'inactive'

  return (
    <div 
      class={`stop-light ${props.direction}`}
      classList={{'active': props.active, 'inactive': !props.active}}
    > 
    <h1>{props.identifier}</h1>
    </div>
  );
};

export default StopLight;