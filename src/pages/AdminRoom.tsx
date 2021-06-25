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

import '../styles/room.scss'

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
    <div id='page-room'>
      <header>
        <div className="content">
          <img src={logoImg} alt="Let me ask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>Close Room</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Room {title}</h1>
          {questions.length > 0 && <span>{questions.length} question(s)</span>}
        </div>
        <div className="question-list">
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