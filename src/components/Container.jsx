import { useEffect, useRef, useState } from 'react'
import Snake from './snake.jsx'

const Container = () => {
  const containerRef = useRef(null)
  const [key, setKey] = useState('')

  const handleKeyEvent = (e) => {
    setKey(e.key)
  }

  useEffect(() => {
    // Set focus on the div when the component mounts
    containerRef.current.focus()
  }, [])

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyEvent}
      className='container bg-black w-[60rem] h-[40rem] absolute top-0 right-0 bottom-0 left-0 m-auto box outline-none'
    >
      <Snake currentKey={key} containerRef={containerRef} />
    </div>
  )
}
export default Container
