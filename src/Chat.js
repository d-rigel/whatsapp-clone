import React, { useState, useEffect } from 'react'
import { Avatar} from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons'
import { IconButton } from "@material-ui/core"
import "./Chat.css"
import { useParams } from "react-router-dom"
import db from './firebase'


function Chat() {
    const [seed, setSeed] = useState("")
    const [input, setInput ] = useState("")
    const { roomId } = useParams()
    const [ roomName, setRoomName ] = useState("")

    useEffect(() => {
        if(roomId) {
            db.collection("rooms").doc(roomId).onSnapshot(snapshot => (setRoomName(snapshot.data().name)))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000)) 
     },[roomId])

     const sendMessage = (e) => {
         e.preventDefault()
         console.log(input)
         setInput("")
     }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                    <SearchOutlined />
                    </IconButton>
                    <IconButton>
                    <AttachFile />
                     </IconButton>
                     <IconButton>
                    <MoreVert />
                     </IconButton>

                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"}`}>
                <span className="chat__name">Nnadozie Emmanuel</span>
                    hey guys 
                <span className="chat__timestamp">
                3:59 PM
                 </span> 
                </p>

            </div>

            <div className="chat__footer">
                <IconButton>
                <InsertEmoticon />
                </IconButton>
                <form>
                    <input
                     type="text"
                      value={input}
                      onChange={e => setInput(e.target.value)} 
                      placeholder="type a message" />
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <IconButton>
                <Mic />
                </IconButton>

            </div>
            
        </div>
    )
}

export default Chat
