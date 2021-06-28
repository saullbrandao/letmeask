import { useHistory, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Question } from '../components/Question'
import { RoomCode } from '../components/RoomCode'
import { useState } from 'react'
import Modal from 'react-modal'
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
  const [showModal, setShowModal] = useState(false)
  const [questionId, setQuestionId] = useState('')
  const { questions, title } = useRoom(roomId)
  Modal.setAppElement('#root');
  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date()
    })

    history.push('/ ')
  }

  function handleOpenModal(questionId: string) {
    setQuestionId(questionId)
    setShowModal(true)
  }

  async function handleDeleteQuestion() {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    setShowModal(false)
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
    <>

      <div className='min-h-screen pb-4' id='admin' >
        <header className='py-6 px-2 border-b border-white-border'>
          <div className='max-w-6xl sm:mx-auto flex justify-between items-center gap-4'>
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
        <Modal
          ariaHideApp={true}
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          contentLabel='Confirm to remove question'
          shouldReturnFocusAfterClose={false}
          bodyOpenClassName='overflow-hidden'
          overlayClassName='fixed left-0 top-0 flex w-full h-full  justify-center items-center bg-shadow bg-opacity-75'
          className='flex flex-col gap-4 h-80 w-full md:w-3/5 lg:w-2/5 rounded-lg bg-white-background bg-opacity- justify-center items-center'
        >
          <svg className='w-12 h-12 stroke-current text-danger' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5.99988H5H21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h1 className='font-poppins font-bold text-2xl text-black'>Delete question</h1>
          <p className='font-roboto text-gray-dark'>Are you sure you want to remove this question?</p>
          <div className="flex gap-2 mt-6">
            <button
              onClick={() => setShowModal(false)}
              className='w-32 p-3 text-gray-dark bg-gray-light rounded-lg'
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteQuestion}
              className='bg-danger p-3 w-32 text-white-details rounded-lg'
            >
              Yes, remove it
            </button>
          </div>
        </Modal>


        <main className='max-w-3xl mx-auto'>
          <div className='mt-8 mb-6 flex flex-col gap-4 md:gap-0 md:flex-row items-center'>
            <h1 className='font-poppins text-center sm:text-left text-2xl text-black'>Room {title}</h1>
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
                    onClick={() => handleOpenModal(question.id)}
                  >
                    <img src={deleteImg} alt='Delete question' />
                  </button>

                </Question>
              )
            })}
          </div>
        </main>
      </div>
    </>
  )
}