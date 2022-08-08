import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService'
import Link from 'next/link'

export default function posts({ posts }) {

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post,idx) => (
          <Link  key={idx} href='/posts/[id]' as={'/posts/' + post.id}>
            <li>{post.id} || {post.title}</li>
          </Link>

        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {

  const posts = await apiService('TEST GET', 'https://jsonplaceholder.typicode.com/posts')

  return {
    props: {
      posts: posts
    }
  }
}