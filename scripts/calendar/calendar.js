/**
 * this is a main function
 */
import {initViewSelect} from "./viewselect.js";
import {initCalendar} from  "./calendar-view.js";
import { startLiveTime } from "./live-time.js";
import { initFuncButton } from "./function-box.js";
initCalendar();
initViewSelect();
startLiveTime();
initFuncButton();