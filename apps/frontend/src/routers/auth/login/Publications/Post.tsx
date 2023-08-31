
import React, {
  useState
} from 'react'
import {
  SkeletonCard
} from './Skeleton'
import {
  PropsCard, PropsTitle
} from '../Interface'

import CardList from './CardList'
import TitlePost from './TitlePost'

const Posting: React.FC = () => {
  const [postCard, ] = useState<PropsCard[]>([
    {
      posting: <SkeletonCard />,

    }
  ])

  const [postTitle, ] = useState<PropsTitle[]>([
    {
      title: <TitlePost />,
    }
  ])


  return (
    <>
      <CardList 
      postCard={postCard} 
      postTitle={postTitle} 
      />
    </>
  )
}

export default Posting
