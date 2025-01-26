import './App.css'
import Card from './components/Card'

function App() {
const ListProduct = [
  {name:"iphone11", price:120000 , id:1},
  {name:"iphone12", price:130000 , id:2},
  {name:"iphone13", price:140000 , id:3},
  {name:"iphone14", price:150000 , id:4},
]
  return (
<>
{
  ListProduct.map(item=>{
    return <Card data={item}/>
  })
}
</>
  )
}

export default App
