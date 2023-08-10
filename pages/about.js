import Link from 'next/link';
import Image from 'next/image';


const ProfilePicture = () => {
  <Image 
    src="/images/profile.jpg"
    height={144}
    width={144}
    alt="Profile Picture"
  />
}

export default function About () {
  return (
    <>
      <ProfilePicture />
      <h1>About Page</h1>
      <Link href="/">Go back to HomePage</Link>
    </>
  )
}