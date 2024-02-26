import { createSignal } from "solid-js";
import { Automobile, Road } from "./types"

export const [UpRoad, setUpRoad] = createSignal<Road>(
  {
    direction: 'up',
    amount: 0
  }
);
export const [UpRoadAmount, setUpRoadAmount] = createSignal<Automobile[]>([]);

export const [DownRoad, setDownRoad] = createSignal<Road>(
  {
    direction: 'down',
    amount: 0
  }
);
export const [DownRoadAmount, setDownRoadAmount] = createSignal<Automobile[]>([]);

export const [LeftRoad, setLeftRoad] = createSignal<Road>(
  {
    direction: 'left',
    amount: 0
  }
);
export const [LeftRoadAmount, setLeftRoadAmount] = createSignal<Automobile[]>([]);

export const [RightRoad, setRightRoad] = createSignal<Road>(
  {
    direction: 'right',
    amount: 0
  }
);
export const [RightRoadAmount, setRightRoadAmount] = createSignal<Automobile[]>([]);