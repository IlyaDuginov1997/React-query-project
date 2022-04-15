import {QueryStatus} from "react-query/types/core/types";
import {useQuery} from "react-query";
import React from "react";
import {DataType, getPosts} from "./App";

export const Home = () => {

  const {
    status,
    data,
    isFetching,
    error
  }: {
    status: QueryStatus,
    data: DataType[] | undefined,
    isFetching: boolean,
    error: any
  } = useQuery('posts', getPosts)

  if ((status as any) === 'loadinig') {
    return <div>loading...</div>
  }

  if (status === 'error') {
    return <div>{(error as any).message}</div>
  }

  if (isFetching) {
    return <div>Fetching...</div>
  }

  return (
    <div>
      <h1>React-query</h1>
      {data && <ul>
        {data.slice(0, 10).map(({id, title, userId, body}) => {
          return <li key={id}>{title}</li>
        })}
      </ul>}
      <button onClick={getPosts}>Get posts</button>
    </div>
  )
}
