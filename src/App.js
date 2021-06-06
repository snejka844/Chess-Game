import React from 'react'
import Signup from './Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './context/AuthContext'
import { ColorContext } from './context/colorcontext'
import { BrowserRouter  as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import JoinRoom from './onboard/joinroom'
import Onboard from './onboard/onboard'
import JoinGame from './onboard/joingame'
import ChessGame from './chess/ui/chessgame'


function App() {
  const [didRedirect, setDidRedirect] = React.useState(false)

  const playerDidRedirect = React.useCallback(() => {
    setDidRedirect(true)
  }, [])

  const playerDidNotRedirect = React.useCallback(() => {
    setDidRedirect(false)
  }, [])

  const [userName, setUserName] = React.useState('')

  return (
      <Container 
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
      >
      <ColorContext.Provider value = {{didRedirect: didRedirect, playerDidRedirect: playerDidRedirect, playerDidNotRedirect: playerDidNotRedirect}}>
     
      <div className="w-100" style={{ maxWidth: "400px"}}>
             <Router>
          <AuthProvider>
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <PrivateRoute path exact = "/" exact>
                <Onboard setUserName = {setUserName}/>
              </PrivateRoute>
                <Route path = "/game/:gameid" exact>
            {didRedirect ? 
              <React.Fragment>
                    <JoinGame userName = {userName} isCreator = {true} />
                    <ChessGame myUserName = {userName} />
              </React.Fragment> 
              :
              <JoinRoom />}
          </Route>
          <Redirect to = "/" />
            </Switch>
          </AuthProvider>
        </Router>
        </div>
        </ColorContext.Provider>
      </Container>
  );
}

export default App;
