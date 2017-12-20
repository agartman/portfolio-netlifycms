import React from "react"

import HeadlineWithFocus from "../components/HeadlineWithFocus"

const Index = props => {
  return (
    <div className="c-content-box">
      <h2>Hi, it's Atte</h2>
      <HeadlineWithFocus
        modifierClassNames={`
          c-headline-focus 
          c-headline-focus--super-big 
        `}
      >
        I'm a full stack developer
      </HeadlineWithFocus>
      <h2
        className={`
          js-action-button-anchor
          c-content-box__subheadline 
          c-content-box__subheadline--with-button
        `}
      >
        I build great apps
      </h2>
    </div>
  )
}

export default Index
