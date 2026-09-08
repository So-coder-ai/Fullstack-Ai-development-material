#App.jsx
```
import Card from "./Card.jsx"

function App() {
  return (
    <>
    <Card></Card>
    </>
    
  );
}
```
export default App;
```
#card.jsx
import mems from './assets/download.jpg'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={mems} alt="profile picture"></img>
            <h2 className='card-title'>brocode</h2>
            <p className='card-text'>asjdaj</p>
        </div>
    );
}
export default Card
```
```
#index.jsx
.card{
  border: 1px solid hsl(0,0%,80%);
  border-radius: 30px;
  box-shadow: 5px 10px 10px hsla(0,0%,0%,0.1);
  padding: 10px;
  margin: 10px;
  text-align: center;
  max-width: 500px;
  display: inline-block;
}
.card .card-image{
  max-width: 70%;
  height: auto;
  border-radius: 10%;
  margin-bottom: 5px;
}
.card .card-title{
  font-family: Arial,sans-serif;
  margin:0;
  color: hsl(0,0%,20%);
}
.card .card-text{
  font-family: Arial,sans-serif;
  margin:5px;
  color: hsl(0,0%,10%);
}
```