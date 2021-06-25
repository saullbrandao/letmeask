import { useState, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'

export const NewRoom = () => {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') return

    const roomRef = database.ref('rooms')
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/admin/rooms/${firebaseRoom.key}`)
  }

  return (
    <div className='flex items-stretch h-screen'>
      <aside className='w-5/12 bg-purple text-white flex flex-col justify-center px-20 py-32'>
        <img
          src={illustrationImg}
          alt="Illustration symboling questions and answers"
          className='max-w-xs'
        />
        <strong className='font-poppins text-4xl font-bold mt-4'>
          Create live Q&amp;A rooms
        </strong>
        <p className='text-2xl mt-4 text-white-background'>
          Answer question from your audience in real time
        </p>
      </aside>
      <main className='w-7/12 px-8 flex items-center justify-center '>
        <div className="flex flex-col w-full max-w-xs items-stretch text-center">
          <img
            src={logoImg}
            alt="Let me ask"
            className='self-center'
          />
          <h2 className='text-2xl mt-16 mb-8 font-poppins'>
            Create a new room
          </h2>
          <form onSubmit={handleCreateRoom} className='flex flex-col gap-4'>
            <input
              type="text"
              placeholder="Room's name"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
              className='h-12 w-full rounded-lg px-4 bg-white border border-gray'
            />
            <Button type="submit">
              Create room
            </Button>
          </form>
          <p className='text-sm mt-4 text-gray-dark'>
            Wanna enter a existing room? <Link className='text-pink' to='/'>Click here</Link>
          </p>
        </div>
      </main>
    </div>
  )
}