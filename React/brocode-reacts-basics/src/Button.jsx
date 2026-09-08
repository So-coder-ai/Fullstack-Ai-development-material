
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