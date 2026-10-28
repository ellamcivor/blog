import './App.css'
import { Header } from './components/general/Header'
import { Mascot } from './components/general/Mascot'
import { Menu } from './components/general/Menu'
import { Content } from './components/general/Content'

function App() {
  return (
    <div className="App">
      <Header />
      <Mascot text="hello! welcome to my page!" />
      <Menu />
      <Content backgroundColor="light-pink-background" />
    </div>
  )
}

export default App
