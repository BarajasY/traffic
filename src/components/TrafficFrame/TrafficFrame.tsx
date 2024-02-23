import { Component, createSignal } from "solid-js";
import './TrafficFrame.scss';
import { DownRoad, DownRoadAmount, LeftRoad, LeftRoadAmount, RightRoad, RightRoadAmount, UpRoad, UpRoadAmount, setDownRoadAmount, setLeftRoadAmount, setRightRoadAmount, setUpRoadAmount } from "~/state";
import StopLight from "../StopLight/StopLight";
import randomIntFromInterval from "~/utils/randomRange";
import { Road as R } from "~/types";
import Road from "../Road/Road";

const TrafficFrame: Component<{}> = (props) => {

  const [UpActive, setUpActive] = createSignal<boolean>(false);
  const [DownActive, setDownActive] = createSignal<boolean>(false);
  const [LeftActive, setLeftActive] = createSignal<boolean>(false);
  const [RightActive, setRightActive] = createSignal<boolean>(false);
  const [CurrentlyActive, setCurrentlyActive] = createSignal<R['direction']>('up');
  const [LightTime, setLightTime] = createSignal<number>(5000);

  setInterval(() => {
    if (CurrentlyActive() === 'up') {
      setCurrentlyActive('right')
      setUpActive(false)
      setDownActive(false)
      setLeftActive(false)
      setRightActive(true)
    } else if (CurrentlyActive() === 'right') {
      setCurrentlyActive('down')
      setUpActive(false)
      setDownActive(true)
      setLeftActive(false)
      setRightActive(false)
    } else if (CurrentlyActive() === 'down') {
      setCurrentlyActive('left')
      setUpActive(false)
      setDownActive(false)
      setLeftActive(true)
      setRightActive(false)
    } else if (CurrentlyActive() === 'left') {
      setCurrentlyActive('up')
      setRightActive(false)
      setUpActive(true)
      setDownActive(false)
      setLeftActive(false)
    }

    setLightTime(10000)

  }, LightTime());

  setInterval(() => {
    const numberRange = randomIntFromInterval(1, 4);

    if (numberRange === 1) {
      if (!(CurrentlyActive() === 'up')) {
        setUpRoadAmount(UpRoadAmount() + 1)
      }
      if (CurrentlyActive() === 'left') {
        setLightTime(LightTime() + 1000)
      }
    }
    
    if (numberRange === 2) {
      if (!(CurrentlyActive() === 'down')) {
        setDownRoadAmount(DownRoadAmount() + 1)
      }
      if (CurrentlyActive() === 'right') {
        setLightTime(LightTime() + 1000)
      }
    }
    
    if (numberRange === 3) {
      if (!(CurrentlyActive() === 'left')) {
        setLeftRoadAmount(LeftRoadAmount() + 1)
      }
      if (CurrentlyActive() === 'down') {
        setLightTime(LightTime() + 1000)
      }
    }
    
    if (numberRange === 4) {
      if (!(CurrentlyActive() === 'right')) {
        setRightRoadAmount(RightRoadAmount() + 1)
      }
      if (CurrentlyActive() === 'up') {
        setLightTime(LightTime() + 1000)
      }
    }

  }, 600)

  setInterval(() => {
    if (CurrentlyActive() === 'up') {
      if (UpRoadAmount() > 0) {
        setUpRoadAmount(UpRoadAmount() - 1)
      }
    }
    if (CurrentlyActive() === 'right') {
      if (RightRoadAmount() > 0) {
        setRightRoadAmount(RightRoadAmount() - 1)
      }
    }
    if (CurrentlyActive() === 'down') {
      if (DownRoadAmount() > 0) {
        setDownRoadAmount(DownRoadAmount() - 1)
      }
    }
    if (CurrentlyActive() === 'left') {
      if (LeftRoadAmount() > 0) {
        setLeftRoadAmount(LeftRoadAmount() - 1)
      }
    }
  }, 600)

  return (
    <div class="traffic-frame">
      <div class="wrapper">
        <div class="vertical-wrapper">
          <Road
            direction={UpRoad().direction}
            active={UpActive()}
            amount={UpRoadAmount()}
          >
            <StopLight
              direction={UpRoad().direction}
              active={UpActive()}
              amount={UpRoadAmount()}
            />
          </Road>
          <Road
            direction={DownRoad().direction}
            active={DownActive()}
            amount={DownRoadAmount()}
          >
            <StopLight
              direction={DownRoad().direction}
              active={DownActive()}
              amount={DownRoadAmount()}
            />
          </Road>
        </div>
        <div class="horizontal-wrapper">
          <Road
            direction={LeftRoad().direction}
            active={LeftActive()}
            amount={LeftRoadAmount()}
          >
            <StopLight
              direction={LeftRoad().direction}
              active={LeftActive()}
              amount={LeftRoadAmount()}
            />
          </Road>
          <Road
            direction={RightRoad().direction}
            active={RightActive()}
            amount={RightRoadAmount()}
          >
            <StopLight
              direction={RightRoad().direction}
              active={RightActive()}
              amount={RightRoadAmount()}
            />
          </Road>
        </div>
      </div>
    </div>
  );
};

export default TrafficFrame;