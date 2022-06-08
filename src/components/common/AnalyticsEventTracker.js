import React from "react";
import ReactGA from "react-ga";

const AnalyticsEventTracker = (category="Unknown Category", action = "Unknown", label = "Unknown") => {
    const eventTracker =  ReactGA.event({category, action, label});
    return eventTracker;
}
export default AnalyticsEventTracker;