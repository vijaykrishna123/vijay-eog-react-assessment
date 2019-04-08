import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import DroneSaga from './Drone'
export default [...ApiErrors, ...WeatherSagas,...DroneSaga];
