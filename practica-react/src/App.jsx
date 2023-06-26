import './App.css'
import Card from './components/card'

function App() {
  return <div className="App">
    <h1>Holaaaa</h1>
    <div className='container'>
      <Card title="Bolt" description="Bolt el Border Collie"/>
      <Card title="Ally" description="Ally la Maltés"/>
      <Card />
      <Card />
    </div>
  </div>
}

export default App
