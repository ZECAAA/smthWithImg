import { Provider } from 'react-redux'
import Smth from './smth/Smth'
import classes from './app.module.scss'
import Navbar from './navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authorization from './authorization/Authorization'
import { store } from './reducers/Reducer'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={classes.main}>
          <Navbar></Navbar>
          <Routes>
            <Route
              path='/login'
              element={<Authorization></Authorization>}
            ></Route>
          </Routes>
          {/*<Login></Login>
        <Registration></Registration>*/}
          {/*<Smth></Smth>*/}
          {/*<LoadingSmth></LoadingSmth>*/}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
