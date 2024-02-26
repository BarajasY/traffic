import { Component, createSignal } from "solid-js";
import './TrafficFrame.scss';
import { DownRoad, DownRoadAmount, LeftRoad, LeftRoadAmount, RightRoad, RightRoadAmount, UpRoad, UpRoadAmount, setDownRoadAmount, setLeftRoadAmount, setRightRoadAmount, setUpRoadAmount } from "~/state";
import StopLight from "../StopLight/StopLight";
import randomIntFromInterval from "~/utils/randomRange";
import { Road as R } from "~/types";
import Road from "../Road/Road";
import colors from "~/colorsMap";

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
    const randomInt = randomIntFromInterval(1, colors.size);

    if (numberRange === 1) {
      if (!(CurrentlyActive() === 'up')) {
        setUpRoadAmount([...UpRoadAmount(), {color: colors.get(randomInt)!.color}])
      }
      if (CurrentlyActive() === 'left') {
        setLightTime(LightTime() + 1000)
      }
    }
    
    if (numberRange === 2) {
      if (!(CurrentlyActive() === 'down')) {
        setDownRoadAmount([...DownRoadAmount(), {color: colors.get(randomInt)!.color}])
      }
      if (CurrentlyActive() === 'right') {
        setLightTime(LightTime() + 1000)
      }
    }
    
    if (numberRange === 3) {
      if (!(CurrentlyActive() === 'left')) {
        setLeftRoadAmount([...LeftRoadAmount(), {color: colors.get(randomInt)!.color}])
      }
      if (CurrentlyActive() === 'down') {
        setLightTime(LightTime() + 1000)
      }
    }
    
    if (numberRange === 4) {
      if (!(CurrentlyActive() === 'right')) {
        setRightRoadAmount([...RightRoadAmount(), {color: colors.get(randomInt)!.color}])
      }
      if (CurrentlyActive() === 'up') {
        setLightTime(LightTime() + 1000)
      }
    }

  }, 600)

  setInterval(() => {
    if (CurrentlyActive() === 'up') {
      if (UpRoadAmount().length > 0) {
        const temp = UpRoadAmount().slice(0, UpRoadAmount().length-1)
        setUpRoadAmount(temp)
      }
    }
    if (CurrentlyActive() === 'right') {
      if (RightRoadAmount().length > 0) {
        const temp = RightRoadAmount().slice(0, RightRoadAmount().length-1)
        setRightRoadAmount(temp)
      }
    }
    if (CurrentlyActive() === 'down') {
      if (DownRoadAmount().length > 0) {
        const temp = DownRoadAmount().slice(0, DownRoadAmount().length-1)
        setDownRoadAmount(temp)
      }
    }
    if (CurrentlyActive() === 'left') {
      if (LeftRoadAmount().length > 0) {
        const temp = LeftRoadAmount().slice(0, LeftRoadAmount().length-1)
        setLeftRoadAmount(temp)
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
            amount={UpRoadAmount().length}
            autos={UpRoadAmount()}
          >
            <StopLight
              direction={UpRoad().direction}
              active={UpActive()}
              amount={UpRoadAmount().length}
            />
          </Road>
          <Road
            direction={DownRoad().direction}
            active={DownActive()}
            amount={DownRoadAmount().length}
            autos={DownRoadAmount()}
            >
            <StopLight
              direction={DownRoad().direction}
              active={DownActive()}
              amount={DownRoadAmount().length}
              />
          </Road>
        </div>
        <div class="horizontal-wrapper">
          <Road
            direction={LeftRoad().direction}
            active={LeftActive()}
            amount={LeftRoadAmount().length}
            autos={LeftRoadAmount()}
          >
            <StopLight
              direction={LeftRoad().direction}
              active={LeftActive()}
              amount={LeftRoadAmount().length}
            />
          </Road>
          <Road
            direction={RightRoad().direction}
            active={RightActive()}
            amount={RightRoadAmount().length}
            autos={RightRoadAmount()}
          >
            <StopLight
              direction={RightRoad().direction}
              active={RightActive()}
              amount={RightRoadAmount().length}
            />
          </Road>
        </div>
      </div>
    </div>
  );
};

export default TrafficFrame;