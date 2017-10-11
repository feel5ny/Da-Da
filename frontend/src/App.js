import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Redirect,
} from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import DiaryPage from './pages/DiaryPage'
import ReportPage from './pages/ReportPage'
import WeightPage from './pages/WeightPage'
import SearchPage from './pages/SearchPage'
import SharePage from './pages/SharePage'
import RecipePage from './pages/RecipePage'

/* 페이지 확인용 라우터 -> 나중에 ajax로 처리할 화면입니다.*/
import SearchResultPage from './pages/SearchPage/ResultPage'
import NoSearchPage from './pages/SearchPage/ResultPage/NoSearch'
import notFoundPage from './pages/404Page'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <Route
          exact
          path="/"
          component={HomePage}
        />

        <Route
          path="/diary"
          component={DiaryPage}
        />
        <Route
          path="/report"
          component={ReportPage}
        />
        <Route
          path="/weight"
          component={WeightPage}
        />
        <Route
          path="/search"
          component={SearchPage}
        />
        <Route
          path="/share"
          component={SharePage}
        />
        <Route
          path="/recipe"
          component={RecipePage}
        />
        <Route
          path="/search-result"
          component={SearchResultPage}
        />
        <Route
          path="/search-no-result"
          component={NoSearchPage}
        />
        <Route
          path="/404"
          component={notFoundPage}
        />
      </div>
    )
  }
}

export default App
