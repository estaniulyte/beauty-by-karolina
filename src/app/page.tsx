import Header from '@/components/Header';
import Procedures from '@/components/Procedures';

import Image from 'next/image';

import { procedures } from '@/data';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Intro from '@/components/Intro';

export default function Home() {
  return (
    <main className=''>
      {/* <Header /> */}
      <MaxWidthWrapper>
        <Intro />
        <Procedures items={procedures} />
      </MaxWidthWrapper>
    </main>
  );
}
