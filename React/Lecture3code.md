/Student.jsx
```
function Student(props){
    return(
        <div className="Student">
            <p >Name: {props.name}</p>
            <p>Age :{props.age}
            </p>
            <p>Student: {props.isStudent?"Yes" : "NO"}</p>
        </div>
    );
}
export default Student
```
/app.jsx
```
import Student from './Student.jsx'
function App() {
  return (
    <>
    <Student name ="Spongbob" age={20} isStudent={true}/>
    <Student name ="Spongbob" age={20} isStudent={true}/>
    <Student name ="Spongbob" age={20} isStudent={true}/>
    </>
    
  );
}

export default App;
```