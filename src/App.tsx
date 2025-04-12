import { useState } from 'react'
import styled from '@emotion/styled'
import CrystalBall from './components/CrystalBall'
import { coffeeKnowledge } from './data/coffeeKnowledge'

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e1e1e1;
  font-family: 'Crimson Text', serif;
`

const Header = styled.header`
  text-align: center;
  padding: 2rem;
  
  h1 {
    font-size: 3.5rem;
    margin: 0;
    color: #c9a959;
    text-shadow: 0 0 10px rgba(201, 169, 89, 0.5);
  }
  
  p {
    font-size: 1.2rem;
    color: #8b8b8b;
  }
`

function App() {
  const [question, setQuestion] = useState('')

  return (
    <AppContainer>
      <Header>
        <h1>The Brew Oracle</h1>
        <p>Seek wisdom in the mystical depths of coffee knowledge</p>
      </Header>
      <CrystalBall 
        question={question}
        setQuestion={setQuestion}
        knowledgeBase={coffeeKnowledge}
      />
    </AppContainer>
  )
}

export default App
