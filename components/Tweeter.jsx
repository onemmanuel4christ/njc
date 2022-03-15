import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
const Tweeter = () => {
  return (
    <TwitterTimelineEmbed
    sourceType="profile"
    screenName="NjcNig"
    options={{height: 500}}
  />
  )
}

export default Tweeter