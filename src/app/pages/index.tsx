import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import profilePic from '../public/images/profile.jpg';
import type { GetServerSideProps } from 'next';

interface HomeProps {
  data: any;
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from an API or database
  const data = await fetch('https://api.example.com/data').then(res => res.json());

  return {
    props: {
      data,
    },
  };
};

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Portfolio</h1>
      <Image src={profilePic} alt="Profile Picture" width={500} height={500} />
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
