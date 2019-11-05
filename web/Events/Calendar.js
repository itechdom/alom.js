import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { flatten } from "lodash";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const formatEvent = event => {
  return {
    title: event.title,
    start: new Date(event.startDateTime || event),
    end: new Date(event.endDateTime || event),
    allDay: event.allDay
  };
};

const prepareEvents = events => {
  let formattedEvents = events.map(event => {
    if (event.isRecurring) {
      return event.instances.map(ev => {
        let formattedEvent = formatEvent({
          title: event.title,
          startDateTime: ev,
          endDateTime: ev
        });
        return formattedEvent;
      });
    }
    return formatEvent(event);
  });
  return flatten(formattedEvents);
};

export const MyCalendar = ({ events }) => {
  if (events) {
    return (
      <div style={{ height: "500px" }}>
        <Calendar
          localizer={localizer}
          events={prepareEvents(events)}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    );
  }
  return <></>;
};
