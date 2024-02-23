import { Setter } from "solid-js";
import { Road } from "~/types";

const updateLights = (
  light: Road['direction'], 
  up: Setter<boolean>, 
  down: Setter<boolean>, 
  left: Setter<boolean>, 
  right: Setter<boolean>) => {
  if (light === 'up') {
    up(true)
    down(false)
    left(false)
    right(false)
  }

  if (light === 'down') {
    up(false)
    down(true)
    left(false)
    right(false)
  }

  if (light === 'right') {
    up(false)
    down(false)
    left(false)
    right(true)
  }

  if (light === 'left') {
    up(false)
    down(false)
    left(true)
    right(false)
  }
}

export default updateLights;