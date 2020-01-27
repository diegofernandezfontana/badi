import { useState, useEffect, useRef } from 'react';

const useCloseDropDown = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(true);
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isDropDownOpen, setIsDropDownOpen };
};
export default useCloseDropDown;
