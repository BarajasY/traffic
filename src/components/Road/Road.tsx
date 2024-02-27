import { For, ParentComponent } from "solid-js";
import './Road.scss';
import { Automobile as A, Road as R } from "~/types";
import Automobile from "../Automobile/Automobile";

type props = R & {
  active: boolean
  autos: A[]
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
      <div class={`autos ${props.direction}-a`}>
        <For each={props.autos}>
          {(autos) => (
            <Automobile 
              color={autos.color}
              size="15px"
            />
          )}
        </For>
      </div>
    </div>
  );
};

export default Road;