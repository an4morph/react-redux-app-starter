import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsAction } from '../../store/actions/posts'

import PageTemplate from '../../components/PageTemplate'

function HomePage() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.data)
  useEffect(() => {
    dispatch(getPostsAction())
  }, [dispatch])

  return (
    <PageTemplate>
      { posts.map((post) => <div key={post.id}>{post.title}</div>) }
    </PageTemplate>
  )
}

export default HomePage
