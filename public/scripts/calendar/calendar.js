/**
 * this is a main function
 */
import {initViewSelect} from "./viewselect.js"; //Sets up the calendar display (from calendar-view.js).
import {initCalendar} from  "./calendar-view.js"; //Handles switching between "month" and "week" view.
import { startLiveTime } from "./live-time.js";  //Displays real-time clock in the header.
import { initFuncButton } from "./function-box.js"; //Sets up navigation buttons (today, next, previous).
initCalendar();
initViewSelect();
startLiveTime();
initFuncButton();