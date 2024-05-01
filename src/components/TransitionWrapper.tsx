import { useEffect, useRef, useState } from "react"
import '../styles/TransitionWrapper.less'

// Source: https://medium.com/@serifcolakel/utilizing-intersection-observer-with-custom-react-hook-in-typescript-5a27575ee154
function useInViewPort<T extends Element>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
  const [ inViewport, setInViewport ] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          setInViewport(entry.isIntersecting)
        }
      })
    }, options)
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
     if (currentRef) {
        observer.unobserve(currentRef);
     }
    };
  }, [ options, ref ]);
  return inViewport;
}

type TransitionProps = React.HTMLAttributes<Element> & {transitionDelay?: number}

function TransitionWrapper(props: TransitionProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const isVisible = useInViewPort(targetRef, { threshold: 0.5 });
  const {transitionDelay, children} = props

  return (
    <div
      className={`transition-wrapper ${isVisible ? "is-visible" : ""}`}
      style={transitionDelay ?{ transitionDelay: `${transitionDelay}ms`} : {}}
      ref={targetRef}
    >
      {children}
    </div>
  )
}

export default TransitionWrapper