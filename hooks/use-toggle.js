const { useState } = require('react');
export const useToggle = (initialToggle) => {
  const [toggleState, setToggleState] = useState(initialToggle || false);

  const open = () => {
    setToggleState(true);
  };
  const close = () => {
    setToggleState(false);
  };
  const toggle = () => {
    setToggleState(!toggle);
  };

  return { toggle, open, close, toggleState };
};
