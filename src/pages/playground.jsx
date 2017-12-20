import React from "react"
import HeadlineWithFocus from "../components/HeadlineWithFocus"
import Helmet from "react-helmet"

export default () => (
  <div className="c-content-box">
    <Helmet title="Let's play" />

    <HeadlineWithFocus>
      I love...
      {/*<span>What's that?</span>*/}
    </HeadlineWithFocus>
    <p>
      ...coding, prototyping and designing new services.{" "}
      <strong>I see technology as an enabler</strong> and with the latest
      advances on IoT, blockchain, cloud services and social media, I think it
      is only companies resistance of change which is keeping the digitalization
      from proceeding faster, not the technology.
      <strong>I see Design thinking as a great tool</strong> and a guide to
      discover the right path on building services.
    </p>
    <p>
      As a developer,{" "}
      <strong>I embrace the functional programming paradigm</strong> and good
      principals of overall solution architecture, such as separation of
      concerns and sustainable API design. I love to test out different
      programming languages and products since I firmly believe that the right
      selection of components in the solution is the key to a successful story
      on a digital service implementation.
    </p>
  </div>
)
