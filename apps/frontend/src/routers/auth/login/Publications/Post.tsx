
import React, {
  useState
} from 'react'
import {
  SkeletonCard
} from './Skeleton'
import {
  PropsAction,
  PropsCard, PropsTitle
} from '../Interface'

import CardList from './CardList'
import TitlePost from './TitlePost'

import ActionsCard from '../CreatePost/ActionsCard'
import { PerfilToken } from '../../types'


const Posting = ({token}: PerfilToken) => {
  const [postCard,] = useState<PropsCard[]>([
    {
      posting: <SkeletonCard />,

    }
  ])

  const [postTitle,] = useState<PropsTitle[]>([
    {
      title: <TitlePost />,
    }
  ])


  const [postAction,] = useState<PropsAction[]>([
    {
      adding: <ActionsCard />
    }
  ])


  return (
    <>
      {token.user.user_metadata.user_name}
      <CardList
        postCard={postCard}
        postTitle={postTitle}
        postAction={postAction}
      />
    </>
  )
}

export default Posting
