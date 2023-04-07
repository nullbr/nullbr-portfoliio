import { useState, useEffect } from 'react'
import AnimatedLetters from '../Title/AnimatedLetters'

const Title = ({ title, idx, cls }) => {
  // Animate page headers
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [letterClass])

  return (
    <h1 className={cls}>
      <AnimatedLetters
        letterClass={letterClass}
        strArray={title.split('')}
        idx={idx}
      />
    </h1>
  )
}

export default Title
