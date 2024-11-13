import { useEffect, useRef, useState } from 'react';
import {
  Action,
  Description,
  Provider,
  Root,
  Title,
  Viewport,
} from '@radix-ui/react-toast';

export const Toast = () => {
  const [open, setOpen] = useState(false);
  const eventDateRef = useRef(new Date());
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  function oneWeekAway() {
    const now = new Date();
    const inOneWeek = now.setDate(now.getDate() + 7);
    return new Date(inOneWeek);
  }

  function prettyDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(date);
  }

  return (
    <Provider swipeDirection="right">
      <button
        className="Button large violet"
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </button>

      <Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <Title className="ToastTitle">Scheduled: Catch up</Title>
        <Description asChild>
          <time
            className="ToastDescription"
            dateTime={eventDateRef.current.toISOString()}
          >
            {prettyDate(eventDateRef.current)}
          </time>
        </Description>
        <Action className="ToastAction" asChild altText="Goto schedule to undo">
          <button className="Button small green">Undo</button>
        </Action>
      </Root>

      <Viewport className="ToastViewport" />
    </Provider>
  );
};
