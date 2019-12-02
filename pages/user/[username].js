import { useRouter } from 'next/router';

export default function User(){
  const router = useRouter();

  return (
  <h1>{router.query.username}</h1>
  )
}