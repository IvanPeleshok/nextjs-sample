import type { NextPage } from 'next'
import Link from 'next/link';

interface IHomeProps {
  time: string;
}

const Home: NextPage<IHomeProps> = ({time}) => {
  return (
    <>
     {`Sween home. Current time ${new Date().toDateString()}`}
    </>
  )
}

export default Home


