import copyImg from '../assets/images/copy.svg'

type RoomCodeProps = {
  code: string;
}

export function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code)
  }

  return (
    <button
      onClick={copyRoomCodeToClipboard}
      className='h-10 rounded-lg overflow-hidden bg-white border border-purple cursor-pointer flex'
    >
      <div className='bg-purple h-full px-3 flex justify-center items-center'>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span className='block self-center flex-1 pl-3 pr-4 w-60 text-sm font-medium'>
        Room #{code}
      </span>
    </button>
  )
}