import UserItem from "./UserItem";
import React, {useCallback, useEffect, useRef, useState} from "react";

const UsersList =() => {

    const [inputValue, setInputValue] = useState('')
    
    const [users, setUsers] = useState([{id: 1, name: "Mariam"}, {id:2, name : "Boka"}]); 

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // }, [users])
    
    const inputRef = useRef(null);
    
    useEffect (()=>{
        inputRef.current.focus()
    }, [])
     
    const onChange = (event) => {
        const value = event.target.value
        setInputValue(value)
    }

    const addUser = (event) =>{
      event.preventDefault()

      const user ={
        id: users.length+1,
        name: inputValue
      } 

      setUsers((prevState) => [...prevState, user])
      setInputValue('')
    }
    
    const removeUser = useCallback((id)=> {
        setUsers((prevState)=>{prevState.filter((user) => user.id !== id)})
  }, [])

    // const customFocus = ()=>{
    //     inputRef.current.focus()
    // }

        return( 
            <div className="users">
                <form onSubmit={addUser} className="user-form">
                    <input ref={inputRef} type="text" onChange={onChange} value={inputValue}/>
                    <button type="submit">Add User</button>
                </form>
                {/* <button onClick={customFocus}>Focus the input</button> */}
                {users.map((user)=>(
                    <UserItem key={user.id} id={user.id} name={user.name} action={removeUser}/>
                ))}
            </div>
        )
    }


export default UsersList
