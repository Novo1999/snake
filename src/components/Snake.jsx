/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP } from '../constants'

const Snake = ({ containerRef, currentKey }) => {
  const [snakePosition, setSnakePosition] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  })
  const [currentDirection, setCurrentDirection] = useState('')

  useEffect(() => {
    switch (currentKey) {
      case ARROW_LEFT:
        setCurrentDirection('left')
        break
      case ARROW_RIGHT:
        setCurrentDirection('right')
        break
      case ARROW_UP:
        setCurrentDirection('top')
        break
      case ARROW_DOWN:
        setCurrentDirection('bottom')
        break
      default:
        setCurrentDirection('')
    }
  }, [currentKey])

  console.log(snakePosition)

  useEffect(() => {
    const widthOfBox = containerRef.current.clientWidth

    setInterval(() => {
      setSnakePosition((currentPosition) => {
        if (currentPosition[currentDirection] < widthOfBox - 16) {
          return {
            ...currentPosition,
            [currentDirection]: currentPosition[currentDirection] + 1,
          }
        }
        return currentPosition
      })
    }, 5)
  }, [containerRef, currentDirection])

  return (
    <div
      style={{
        translate: `${snakePosition[currentDirection]}px`,
      }}
      className={`bg-red-500 w-4 h-4 absolute
  `}
    ></div>
  )
}
export default Snake
