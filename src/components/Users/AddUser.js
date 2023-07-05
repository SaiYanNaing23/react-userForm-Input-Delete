import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModalBox from "../UI/ErrorModalBox";
const AddUser = props => {
    const [userName,setUserName] = useState("");
    const [age,setAge] = useState("");
    const [error,setError] = useState("");
    const nameChangeHandler = e =>{
        setUserName(e.target.value);
    }
    const ageChangeHandler = e =>{
        setAge(e.target.value);
    }
    const submitHandler = e =>{
        e.preventDefault();
        if(userName.trim().length === 0 || age.trim().length === 0){
            setError({
                title :"Invalid Input",
                message : "Please enter valid name and age ( age>0 )",
            })
            return;
        } 
        if(+age < 1){
            setError({
                title : "Invalid Age",
                message : "Please enter valid age.",
            })
            return;
        }
        const userData = {
                userName,
                age,
            }
        props.onSaveData(userData)
        console.log(userData);
        setUserName("");
        setAge("");
        };
        const buttonCloseHandler = () =>{
            setError(null)
        }
    return (
        <div>
            {error &&  <ErrorModalBox title={error.title} message={error.message} onConfirm = {buttonCloseHandler}></ErrorModalBox>}
        <form onSubmit={submitHandler}>
            <Card className = {styles.input}>
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" onChange={nameChangeHandler} value={userName}></input>
            <label htmlFor="age">Age (years)</label>
            <input type="number" id="age" onChange={ageChangeHandler} value={age}></input>
            <Button type="submit">Add User</Button>
            </Card>
        </form>
        </div>
    )
}

export default AddUser;