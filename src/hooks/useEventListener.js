import { useRef, useEffect } from "react";

const useEventListener = (eventName, handler, element = window) => {
  // ref for handler function
  const savedHandler = useRef();

  // update ref.current's value if handler changes
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // make sure el supports addEventListener
    const isSupported = element && element.addEventListener;
    if (!isSupported) {
      return;
    }

    // Create event listener that calls handler function stored in ref
    const eventListener = (e) => savedHandler.current(e);

    // add listener
    element.addEventListener(eventName, eventListener);

    // remove event listener on cleanup
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);

  return element;
};

export default useEventListener;
