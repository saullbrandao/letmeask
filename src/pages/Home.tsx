import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export const Home = () => {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') return

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Room does not exists')
      return
    }
    if (roomRef.val().closedAt) {
      alert('Room already closed')
      return
    }

    history.push(`rooms/${roomCode}`)

  }

  return (
    <div className='flex items-stretch h-screen dark:bg-shadow'>
      <aside className='hidden w-2/5 bg-purple text-white sm:flex flex-col justify-center px-20 py-32'>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
          className='max-w-xs'
        />
        <strong className='font-poppins font-bold text-3xl leading-10 mt-4'>
          Create live Q&amp;A rooms
        </strong>
        <p className='text-2xl mt-4 text-white-background'>
          Answer question from your audience in real time
        </p>
      </aside>
      <main className='w-full sm:w-3/5 px-8 flex justify-center items-center'>
        <div className='flex flex-col w-full max-w-xs items-stretch text-center'>
          <Logo />
          <button
            onClick={handleCreateRoom}
            className='mt-16 h-12 rounded-lg font-medium bg-red text-white flex justify-center items-center cursor-pointer border-0 transition hover:filter hover:brightness-90 '
          >
            <img
              src={googleIconImg}
              alt="Logo do google"
              className='mr-2'
            />
            Create a room with Google
          </button>
          <div className="text-gray text-sm my-8 flex items-center">
            <span className='flex-1 h-px bg-gray-light mr-4'></span>
            or join a room
            <span className='flex-1 h-px bg-gray-light ml-4'></span>
          </div>
          <form
            onSubmit={handleJoinRoom}
            className='flex flex-col gap-4'
          >
            <input
              type="text"
              placeholder="Type the room's code"
              onChange={event => setRoomCode(event.target.value)}
              className='h-12 w-full rounded-lg px-4 bg-white dark:bg-shadow dark:text-white border border-gray'
            />
            <Button
              type="submit"
              fullWidth
            >
              Enter room
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}