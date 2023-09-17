import { CheckBox } from "@mui/icons-material";
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {useState} from "react"

const initialTodos = [
    {id:1,text:"Omji walking",completed:true},
    {id:2,text:"Omji Dwivedi walking",completed:false},
    {id:3,text:"Omji walking",completed:true},
    {id:4,text:"Omji  Dwivedi walking with friends",completed:false},
    {id:5,text:"Omji walking",completed:true},
    {id:6,text:"Omji walking",completed:false},
    {id:7,text:"Omji walking",completed:true},
]
export default function TodoList(){
    const [todos,setTodos]= useState(initialTodos);

    return (
        <List sx={{width:"100",maxWidth:360,bgcolor:"background.paper"}}>
            {todos.map((todo)=>{
                const labelId = `checkbox-list-label-${todo.id}`;
                return (
                    <ListItem
                    key={todo.is}
                    secondaryAction={
                        <IconButton edge = "end" aria-label ="comments">
                            <CommentIcon/>
                        </IconButton>
                    }
                    disablepadding
                    >
                        <ListItemButton role = {undefined} dense>
                            <ListItemIcon>
                                <CheckBox 
                                  edge = "start"
                                  checked = {todo.completed}
                                  tabIndex = {-1}
                                  dissableRipple
                                  inputProps = {{"aria-labelledby":labelId}}
                                  />
                            </ListItemIcon>
                            <ListItemText id="{labelId} primary = {todo.text}"/>
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    )
}