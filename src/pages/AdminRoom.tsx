import { useHistory, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Question } from '../components/Question'
import { RoomCode } from '../components/RoomCode'
import { useRoom } from '../hooks/useRoom'
import { database } from '../services/firebase'

import logoImg from '../assets/images/logo.svg'
import checkImg from '../assets/images/check.svg'
import deleteImg from '../assets/images/delete.svg'
import answerImg from '../assets/images/answer.svg'

type RoomParams = {
  id: string;
}

export const AdminRoom = () => {
  const history = useHistory()
  const params = useParams<RoomParams>()
  const roomId = params.id

  const { questions, title } = useRoom(roomId)

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date()
    })

    history.push('/ ')
  }

  async function handleDeleteQuestion(questionId: string) {
    // TODO: create a modal
    if (window.confirm('Tem certeza que deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleCheckAnsweredQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    })
  }

  return (
    <div className='mb-4'>
      <header className='p-6 border-b border-white-border'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          <img
            src={logoImg}
            alt="Let me ask"
            className='max-h-11'
          />
          <div className='flex gap-4'>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>Close Room</Button>
          </div>
        </div>
      </header>

      <main className='max-w-3xl mx-auto'>
        <div className='mt-8 mb-6 flex items-center'>
          <h1 className='font-poppins text-2xl text-black'>Room {title}</h1>
          {questions.length > 0 &&
            <span className='ml-4 bg-pink rounded-full py-2 px-4 text-white font-medium text-sm'>
              {questions.length} question(s)
            </span>}
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {questions.map(question => {
            return (
              <Question
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
                key={question.id}
              >
                {!question.isAnswered &&
                  <>
                    <button
                      type='button'
                      onClick={() => handleCheckAnsweredQuestion(question.id)}
                    >
                      <img src={checkImg} alt='Mark as answered' />
                    </button>
                    <button
                      type='button'
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img src={answerImg} alt='Highlight question' />
                    </button>
                  </>
                }
                <button
                  type='button'
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt='Delete question' />
                </button>
              </Question>
            )
          })}
        </div>
      </main>
    </div>
  )
}