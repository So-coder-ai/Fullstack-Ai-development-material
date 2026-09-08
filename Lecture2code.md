#index.css
**External**
```
.button{
  background-color: hsl(200,100%,50%);
  color: red;
  padding: 10px 20px;
  border-radius: 20%;
  border: none;
  cursor: pointer;
}
```
**module**
*with modules wwe don't have to worry about naming conflicts*
/Button/Button.jsx
```
import styles from './Button.module.css'
function Button(){
    return(
        <button className={styles.button}>click me</button>
    );
}
export default Button
```
/Button/Button.module.css
```
.button{
  background-color: hsl(200,100%,50%);
  color: red;
  padding: 10px 20px;
  border-radius: 20%;
  border: none;
  cursor: pointer;
}
```
#inline 
*inline styling reduces the readiblithy ,covinent easy to understand*
/Button.jsx
```
function Button(){
    const styles = {

        backgroundColor:"hsl(200,100%,50%)",
        color: "red",
        padding: "10px 20px",
        borderRadius: "20%",
        border: "none",
        cursor: "pointer",

    }
    return(
        <button style={styles}>click me</button>
    );
}
export default Button
```
/App.jsx
```
import Button from './Button.jsx'
function App() {
  return (
    <>
    <Button/>
    </>
    
  );
}

export default App;
```
