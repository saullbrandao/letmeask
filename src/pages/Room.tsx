import { useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Question } from '../components/Question'
import { RoomCode } from '../components/RoomCode'
import { FormEvent, useState } from 'react'
import { database } from '../services/firebase'
import { useAuth } from '../hooks/useAuth'
import logoImg from '../assets/images/logo.svg'

import { useRoom } from '../hooks/useRoom'

type RoomParams = {
  id: string;
}

export const Room = () => {
  const { user } = useAuth()
  const params = useParams<RoomParams>()
  const [newQuestion, setNewQuestion] = useState('')
  const roomId = params.id

  const { questions, title } = useRoom(roomId)

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault()

    if (newQuestion.trim() === '') return

    if (!user) {
      throw new Error('You must be logged in')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)
    setNewQuestion('')
  }

  async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
    if (likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove()
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      })
    }
  }

  return (
    <div className='mb-4'>
      <header className='p-6 border-b border-white-border'>
        <div className='max-w-6xl mx-auto flex justify-between items-center '>
          <img
            src={logoImg}
            alt="Let me ask"
            className='max-h-11'
          />
          <RoomCode code={roomId} />
        </div>
      </header>

      <main className='max-w-3xl mx-auto'>
        <div className='mt-8 mb-6 flex items-center'>
          <h1 className='font-poppins text-2xl text-black'>
            {title}'s Room
          </h1>
          {questions.length > 0 &&
            <span className='ml-4 bg-pink rounded-full py-2 px-4 text-white font-medium text-sm'>
              {questions.length} question(s)
            </span>}
        </div>
        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder='What you wanna ask?'
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
            className='w-full border-0 p-4 rounded-lg bg-white-details shadow resize-y h-32 '
          />
          <div className='flex justify-between items-center mt-4'>
            {user ? (
              <div className='flex items-center'>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className='w-8 h-8 rounded-full'
                />
                <span className='ml-2 text-black font-medium text-sm' >
                  {user.name}
                </span>
              </div>
            ) : (
              <span className='text-sm font-medium text-gray-dark'>
                <button className='bg-transparent border-0 text-purple underline text-sm font-medium cursor-pointer '>
                  Login
                </button> to send a question.
              </span>)}
            <Button type='submit' disabled={!user}>Send question</Button>
          </div>
        </form>
        <div className='mt-8 flex flex-col gap-4'>
          {questions.map(question => {
            return (
              <Question
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
                key={question.id}
              >
                {
                  !question.isAnswered &&
                  <button
                    className={`border-0 bg-transparent cursor-pointer flex items-end text-gray-dark gap-2 transition duration-200 hover:filter hover:brightness-75  ${question.likeId ? 'text-purple' : ''}`}
                    type='button'
                    aria-label='Give a like'
                    onClick={() => handleLikeQuestion(question.id, question.likeId)}
                  >
                    {question.likeCount > 0 && <span>{question.likeCount}</span>}
                    <svg className={`stroke-current ${question.likeId ? 'text-purple' : 'text-gray-dark'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  </button>}
              </Question>)
          })}
        </div>
      </main>
    </div>
  )
}