import Dispatcher from "./Dispatcher";
import { store } from "./RockPaperScissorsStore";

const dispatcher = new Dispatcher(store);
export { dispatcher, store };