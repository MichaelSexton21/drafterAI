import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import { CompareSlider } from "../components/CompareSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import Toggle from "../components/Toggle";
import downloadPhoto from "../utils/downloadPhoto";

// Configuration for the uploader
const uploader = Uploader({ apiKey: process.env.NEXT_PUBLIC_UPLOAD_API_KEY || "free" });
const options = {
  maxFileCount: 1,
  mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
  editor: { images: { crop: false } },
  styles: { colors: { primary: "#000" } },
};

const Home: NextPage = () => {
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
  const [sideBySide, setSideBySide] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // HERE ARE ALL THE VARIBALES FOR OUR SHITSHOW
  const [film, setFilm] = useState<boolean>(false)
  const [pastels, setPastel] = useState<boolean>(false)
  const [barbie, setBarbie] = useState<boolean>(false)
  const [neutral, setNeutral] = useState<boolean>(false)
  const [rustic, setRustic] = useState<boolean>(false)
  const [clean, setClean] = useState<boolean>(false)

  //ARRAY OF VARIABLES
  const choices = [film, pastels, barbie, neutral, rustic, clean]
  const choicesString = ["film", "pastels", "barbie", "neutral", "rustic", "clean"]




  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (file.length !== 0) {
          setOriginalPhoto(file[0].fileUrl);
          generatePhoto(file[0].fileUrl);
        }
      }}
      width="670px"
      height="250px"
    />
  );

  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(true);
    const s = "";
    for (let i = 0; i < choices.length; i++) {
      if(choices[i] == true){
        // index += 1
        s + choicesString[i] + ","
        // if index > 3 
      }
    }    
    // get rid of the last , in a thing
      const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: fileUrl, stringChoice: s}),
    });

    let newPhoto = await res.json();
    if (newPhoto === "The request has been rate limited") {
      setError(
        "The request has been rate limited. Please try again in a few minutes."
      );
    } else {
      setRestoredImage(newPhoto);
    }    
    setLoading(false);
  }

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Restore Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div></div>
      <div></div>
      <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl mb-5">
          Stylize your image!
      </h1>
      <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4">
            <div className="flex sm:space-x-10 sm:flex-row flex-col">     
              {/* Balloon 1 */}
              <div className="sm:mt-0 mt-8 hover:cursor-pointer" onClick={() => setFilm(!film)}>
                <Image
                  alt="Restored photo of my bro"
                  width={320}
                  height={320}
                  src="/b1.png"
                  className={`w-24 h-24 sm:mt-0 mt-2 ${film ? "border-4 border-[#FF8C91]" : "border-4 border-transparent" } rounded-3xl`}
                />
                <h2 className="mb-1 font-medium text-center">Film</h2>
              </div>
              {/* Balloon 2 */}
              <div className="sm:mt-0 mt-8 hover:cursor-pointer" onClick={() => setPastel(!pastels)}>
                <Image
                  alt="Restored photo of my bro"
                  width={320}
                  height={320}
                  src="/b2.png"
                  className={`w-24 h-24 sm:mt-0 mt-2 ${pastels ? "border-4 border-[#FF8C91]" : "border-4 border-transparent" } rounded-3xl`}
                />
                <h2 className="mb-1 font-medium text-center">Pastels</h2>

              </div>
              {/* Balloon 3 */}
              <div className="sm:mt-0 mt-8 hover:cursor-pointer" onClick={() => setBarbie(!barbie)}>
                <Image
                  alt="Restored photo of my bro"
                  width={320}
                  height={320}
                  src="/b3.png"
                  className={`w-24 h-24 sm:mt-0 mt-2 ${barbie ? "border-4 border-[#FF8C91]" : "border-4 border-transparent" } rounded-3xl`}
                />
                <h2 className="mb-1 font-medium text-center">Barbie</h2>
              </div>
            </div>
            <div className="flex sm:space-x-10 sm:flex-row flex-col">     
              {/* Balloon 4 */}
              <div className="sm:mt-0 mt-8 hover:cursor-pointer" onClick={() => setNeutral(!neutral)}>
                <Image
                  alt="Restored photo of my bro"
                  width={320}
                  height={320}
                  src="/b4.png"
                  className={`w-24 h-24 sm:mt-0 mt-2 ${neutral ? "border-4 border-[#FF8C91]" : "border-4 border-transparent" } rounded-3xl`}
                />
                <h2 className="mb-1 font-medium text-center">Neutral</h2>
              </div>
              {/* Balloon 5 */}
              <div className="sm:mt-0 mt-8 hover:cursor-pointer" onClick={() => setRustic(!rustic)}>
                <Image
                  alt="Restored photo of my bro"
                  width={320}
                  height={320}
                  src="/b5.png"
                  className={`w-24 h-24 sm:mt-0 mt-2 ${rustic ? "border-4 border-[#FF8C91]" : "border-4 border-transparent" } rounded-3xl`}
                />
                <h2 className="mb-1 font-medium text-center">Rustic</h2>

              </div>
              {/* Balloon 6 */}
              <div className="sm:mt-0 mt-8 hover:cursor-pointer" onClick={() => setClean(!clean)}>
                <Image
                  alt="Restored photo of my bro"
                  width={320}
                  height={320}
                  src="/b6.png"
                  className={`w-24 h-24 sm:mt-0 mt-2 ${clean ? "border-4 border-[#FF8C91]" : "border-4 border-transparent" } rounded-3xl`}
                />
                <h2 className="mb-1 font-medium text-center">Clean</h2>
              </div>
            </div>
          </div>
        </div>

      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4">

        <ResizablePanel>
          <AnimatePresence exitBeforeEnter>
            <motion.div className="flex justify-between items-center w-full flex-col mt-4">
              <Toggle
                className={`${restoredLoaded ? "visible" : "invisible"} mb-6`}
                sideBySide={sideBySide}
                setSideBySide={setSideBySide}
              />
              {restoredLoaded && sideBySide && (
                <CompareSlider
                  original={originalPhoto!}
                  restored={restoredImage!}
                />
              )}
              {!originalPhoto && <UploadDropZone />}
              {originalPhoto && !restoredImage && (
                <Image
                  alt="original photo"
                  src={originalPhoto}
                  className="rounded-2xl"
                  width={475}
                  height={475}
                />
              )}
              {restoredImage && originalPhoto && !sideBySide && (
                <div className="flex sm:space-x-4 sm:flex-row flex-col">
                  <div>
                    <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                    <Image
                      alt="original photo"
                      src={originalPhoto}
                      className="rounded-2xl relative"
                      width={475}
                      height={475}
                    />
                  </div>
                  <div className="sm:mt-0 mt-8">
                    <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                    <a href={restoredImage} target="_blank" rel="noreferrer">
                      <Image
                        alt="restored photo"
                        src={restoredImage}
                        className="rounded-2xl relative sm:mt-0 mt-2 cursor-zoom-in"
                        width={475}
                        height={475}
                        onLoadingComplete={() => setRestoredLoaded(true)}
                      />
                    </a>
                  </div>
                </div>
              )}
              {loading && (
                <button
                  disabled
                  className="bg-black rounded-full text-white font-medium px-4 pt-2 pb-3 mt-8 hover:bg-black/80 w-40"
                >
                  <span className="pt-4">
                    <LoadingDots color="white" style="large" />
                  </span>
                </button>
              )}
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-8"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              <div className="flex space-x-2 justify-center">
                {originalPhoto && !loading && (
                  <button
                    onClick={() => {
                      setOriginalPhoto(null);
                      setRestoredImage(null);
                      setRestoredLoaded(false);
                    }}
                    className="bg-black rounded-full text-white font-medium px-4 py-2 mt-8 hover:bg-black/80 transition"
                  >
                    Upload New Photo
                  </button>
                )}
                {restoredLoaded && (
                  <button
                    onClick={() => {
                      downloadPhoto(restoredImage!, "restoredPhoto.jpg");
                    }}
                    className="bg-white rounded-full text-black border font-medium px-4 py-2 mt-8 hover:bg-gray-100 transition"
                  >
                    Download Restored Photo
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
