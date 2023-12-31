import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Aestetic.ly</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-24 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Curate the {" "}
          <div>
          <span className="relative whitespace-nowrap text-[#E19CFA]">
            <SquigglyLines />
            <span className="relative">perfect content</span>
          </span>{" "}
          </div>
          in an instant.
        </h1>
        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          Match your photos to a theme before you post to your socials. 
          <div>  Increase your engagement. </div>
        </p>
        <Link
          className="bg-[#E19CFA] rounded-full text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80"
          href="/restore"
        >
          Upload your Design
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="Original photo of my bro"
                  src="/orgBalloon.png"
                  className="w-80 h-80 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Social Media Aesthetic</h2>
                <Image
                  alt="Restored photo of my bro"
                  width={320}
                  height={320}
                  src="/profile.png"
                  className="w-80 h-80 rounded-2xl sm:mt-0 mt-2"
                />
              </div>          
          </div>
            <div className="flex sm:space-x-2 sm:flex-row flex-col"> 
              {/* Balloon 1 */}
              <div className="sm:mt-0 mt-8">
                <Image
                  alt="Restored photo of my bro"
                  width={320}
                  height={320}
                  src="/b1.png"
                  className="w-20 h-20 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
              {/* Balloon 2 */}
              <div className="sm:mt-0 mt-8">
                <Image
                  alt="Restored photo of my bro"
                  width={320}
                  height={320}
                  src="/b2.png"
                  className="w-20 h-20 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
              {/* Balloon 3 */}
              <div className="sm:mt-0 mt-8">
                <Image
                  alt="Restored photo of my bro"
                  width={320}
                  height={320}
                  src="/b3.png"
                  className="w-20 h-20 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
              {/* Balloon 4 */}
              <div className="sm:mt-0 mt-8">
                <Image
                  alt="Restored photo of my bro"
                  width={320}
                  height={320}
                  src="/b4.png"
                  className="w-20 h-20 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
          <p className="text-gray-500 mt-3 mb-10 sm:text-base text-sm">
            {/* THERE IS NOTHING IN HERE RIGHT NOW */}
          </p>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;