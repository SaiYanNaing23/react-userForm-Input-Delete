import Card from "../UI/Card";
import styles from "./AddUser.module.css";
const AddUser = props => {
    const submitHandler = e =>{
        e.preventDefault();
    }
    return (
        <form onSubmit={submitHandler}>
            <Card className = {styles.input}>
            <label htmlFor="username">User Name</label>
            <input type="text" id="username"></input>
            <label htmlFor="age">Age (years)</label>
            <input type="number" id="age"></input>
            <button type="submit">Add User</button>
            </Card>
        </form>
    )
}

export default AddUser;