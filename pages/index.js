import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React,{useState,useEffect} from 'react'

export default function Home() {
  const [resourceType,setResourceType] = useState('posts')
  const [items,setItems] = useState([])
  useEffect(()=>{
    console.log('render')
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response=>response.json())
    .then(json=>setItems(json))
  },[resourceType])
  return (
    <>
      <button onClick={() =>setResourceType('posts')}>Posts</button>
      <button onClick={() =>setResourceType('users')}>Users</button>
      <button onClick={() =>setResourceType('comments')}>Comments </button>
    
  <h1>{resourceType}</h1>
  {items.map(item  =>{
    return <pre>{JSON.stringify(item)}</pre>
  })}
    </>
  )
}
 