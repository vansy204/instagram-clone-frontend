import React from 'react'
import StoryViewer from '../../Components/StoryComponets/StoryViewer'

const Story = () => {
    const story =[
        {
            image: "https://images.pexels.com/photos/13082851/pexels-photo-13082851.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        },
        {
            image:"https://images.pexels.com/photos/29034031/pexels-photo-29034031/free-photo-of-dan-c-u-thanh-th-n-g-m-c-d-ng-c-xanh-t-i.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        },
        {
            image:"https://images.pexels.com/photos/8755965/pexels-photo-8755965.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        },
        {
            image:"https://images.pexels.com/photos/20606728/pexels-photo-20606728/free-photo-of-thien-nhien-chi-nhanh-trai-cay-qu-m-ng.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        }
    ]
  return (
    <div>
        <StoryViewer stories={story}/>
    </div>
  )
}

export default Story