import React from 'react'
import WelcomeText from './WelcomeText'
import SearchForm from './SearchForm'
import CurlText from './CurlText'
import QuickSpins from './QuickSpins'

export default function HomeContent() {
  return (
    <div className="homeContentContainer">

      <div className="contentBlockLeft">
        <WelcomeText />
        <SearchForm />
      </div>

      <div className="contentBlockRight">
        <QuickSpins/>
      </div>

    </div>
  )
}