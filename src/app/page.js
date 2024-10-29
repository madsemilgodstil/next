import CookieConsent from './components/CookieConsent'

export default function Home () {
  return (
    <div>
      <h1 className='text-center text-[5rem] text-red-500'>
        This is styled with tailwind!
      </h1>
      <CookieConsent />
    </div>
  )
}
