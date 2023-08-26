import Image from "next/image"

export default function Home() {
  return (
    
    <div className='w-[680px] h-[840px] bg-[var(--hover-color)] rounded-[20px]'>
      <Image src='/girl-and-pet.png' alt='Girl and pet' width={775} height={990} className='absolute top-0 right-0' />
    </div>
      )
}
