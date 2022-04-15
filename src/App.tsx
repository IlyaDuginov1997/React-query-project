import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import './App.css';
import {Home} from './Home';

export type DataType = {
  body: string,
  id: number,
  title: string,
  userId: number,
}

export const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  await new Promise((r) => setTimeout(r, 1000))
  return response.json()
};

const queryClient = new QueryClient()


export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Home/>
    </QueryClientProvider>);
}

