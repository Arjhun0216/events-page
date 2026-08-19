import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      {/* Add About / Events preview / Sponsors sections below as you build them */}
    </div>
  );
}
