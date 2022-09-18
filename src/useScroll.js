import { useRef } from 'react';

//hook
function useScroll() {
  const scrollToElement = useRef(null);
  const onMoveToElement = () => {
    scrollToElement.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { scrollToElement, onMoveToElement};
}

export default useScroll;