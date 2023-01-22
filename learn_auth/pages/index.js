import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"; 
import { useSession, getSession, signOut} from "next-auth/react"
 
export default function Home() {
  function handleSignout(){
signOut()
  }
  
  const { data: session } = useSession()
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {session ? User({session,handleSignout }): Guest()}
    </>
  )
}
//Guest
function Guest() {
  return (
    <main className='container mx-auto text-center py-20'>
    <h3 className="text-4xl font-bold">
     Guest Hompage
  </h3> 
  <div className="flex justify-center">
    <Link href='/login' className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-100 no-underline'>Sign In</Link>
  </div>
    </main>
  )
}
//Authorize User
function User({session, handleSignout}) {
  return (
    <main className='container mx-auto text-center py-20'>
    <h3 className="text-4xl font-bold underline">
    Authorize User  Hompage
  </h3> 
  <div className="details">
    <h5>{session.user.name}</h5>
    <h5>{session.user.email}</h5>
  </div>
  <div className="flex justify-center">
    <button 
  onClick={handleSignout}  
     className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>
      Sign Out
      </button>
  </div>
  <div className="flex justify-center">
    <Link href='/profile' className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-100 no-underline'>
      Profile page
      </Link>
  </div>
    </main>
  )
}
export async function getServerSideProps({req}){
const session = await getSession({req})
if(!session){
  return{
    redirect:{
      destination:'/login',
      permanent:false
    }
  }
}
return{
  props:{session}
}
}
 

