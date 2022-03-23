import * as React from 'react'
import './styles.scss'

const Text: React.FC<{
  className?: string
}> = ({ className }) => (
    <text {...className}>Hello World</text>
)


export type ITextProps = {
    className?: string
  }
  

const App: React.FC<ITextProps> = ({ className }) => {


  return <Text className={className} />
}

export default App