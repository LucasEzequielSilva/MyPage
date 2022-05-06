import React, {useRef, useEffect} from 'react'

const Cursor = () => {
  const dot = useRef(null);

  const delay = 18;

  const cursorVisible = useRef(true)
  const cursorEnlarged = useRef(false)

  const endX = useRef(window.innerWidth / 2)
  const endY = useRef(window.innerHeight / 2)

  const _x = useRef(0)
  const _y = useRef(0)

  const requestRef = useRef(null)

  useEffect(()=>{
    document.addEventListener('mousedown', mouseOverEvent)
    document.addEventListener('mouseup', mouseOutEvent)
    document.addEventListener('mousemove', mouseMoveEvent)
    document.addEventListener('mouseenter', mouseEnterEvent)
    document.addEventListener('mouseleave', mouseLeaveEvent)

    animateDotOutline()

    return()=>{
      document.removeEventListener('mousedown', mouseOverEvent)
      document.removeEventListener('mouseup', mouseOutEvent)
      document.removeEventListener('mousemove', mouseMoveEvent)
      document.removeEventListener('mouseenter', mouseEnterEvent)
      document.removeEventListener('mouseleave', mouseLeaveEvent)

      cancelAnimationFrame(requestRef.current)
    }
  }, [])

  const toggleCursorVisibility = ()=>{
    if(cursorVisible.current){
      dot.current.style.opacity = 1;
    }
    else{
      dot.current.style.opacity = 0;
    }
  }
  const toggleCursorSize = ()=>{
    if(cursorEnlarged){
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)'
    }
    else{
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)'
    }
  }
  const mouseOverEvent=()=>{
    cursorEnlarged.current = true
    toggleCursorSize()
  }
  const mouseOutEvent = ()=>{
    cursorEnlarged.current =false
    toggleCursorSize()
  }
  const mouseEnterEvent = ()=>{
    cursorVisible.current =true
    toggleCursorVisibility()
  }
  const mouseLeaveEvent =()=>{
    cursorVisible.current =false
    toggleCursorVisibility()
  }
  const mouseMoveEvent = e =>{
    cursorVisible.current =true
    toggleCursorVisibility()

    endX.current=e.pageX
    endY.current=e.pageY
    dot.current.style.left = endX.current + 'px'
    dot.current.style.top = endY.current + 'px'
  }
  const animateDotOutline=()=>{
    _x.current +=(endX.current - _x.current) / delay
    _y.current +=(endY.current - _y.current) / delay

    
    requestRef.current = requestAnimationFrame(animateDotOutline)
  }
  return (
    <div className="cursor">
        <img ref={dot} className='cursor-dot' src='https://help.apple.com/assets/61D4C1B5425F2576373C512A/61D4C1B7425F2576373C5132/es_ES/a0d5e859e5f2b01dbbf81dfc38a3a92f.png'/>
</div>
  )
}

export default Cursor