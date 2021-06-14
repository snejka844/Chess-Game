import io from 'socket.io-client'

const URL = 'https://head2headchess.herokuapp.com/'//'http://localhost:8000' 

const socket = io(URL)

var mySocketId
// register preliminary event listeners here:


socket.on("createNewGame", statusUpdate => {
    console.log("A new game has been created! Username: " + statusUpdate.userName + ", Game id: " + statusUpdate.gameId + " Socket id: " + statusUpdate.mySocketId)
    mySocketId = statusUpdate.mySocketId
})

export {
    socket,
    mySocketId
}
