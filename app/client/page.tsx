'use client'
import { wait } from '@/serverActions'
import { useEffect, useState } from 'react'

export default function Page() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    wait(3000).then(({ message }) => {
      setMessage(message)
      setLoading(false)
    })
  }, [])
  return (
    <>
      <h1>Client Page!</h1>
      <h2>{message}</h2>
    </>
  )
}
