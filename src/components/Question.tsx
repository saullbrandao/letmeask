import { ReactNode } from 'react'

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  },
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}: QuestionProps) {
  return (
    <div className={`bg-white dark:bg-gray-darker sm:rounded-lg shadow p-6 ${isAnswered ? 'bg-gray-light dark:bg-black' : ''} ${(isHighlighted && !isAnswered) ? 'border border-purple bg-white-details' : ''}`}>
      <p className='text-black dark:text-white'>{content}</p>
      <footer className='flex justify-between items-center mt-6'>
        <div className="flex items-center">
          <img
            src={author.avatar}
            alt={author.name}
            className='h-8 rounded-full '
          />
          <span className={`ml-2 text-gray-dark dark:text-gray text-sm ${isHighlighted ? 'text-black dark:text-white' : ''} `}>
            {author.name}
          </span>
        </div>
        <div className='flex gap-4' >
          {children}
        </div>
      </footer>
    </div>
  )
}