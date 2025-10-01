import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col md:flex-row">
      <div className="relative h-64 md:h-screen md:basis-2/5 w-full">
        <Image
          className="object-cover object-[50%_70%]"
          src="/IMG_6659.jpg"
          alt="Beautiful sky"
          fill
        />
      </div>
      <div className="hidden md:flex flex-row flex-1 gap-2 bg-white">
        <div className="w-2 h-screen bg-skybrown" />
        <div className="w-2 h-screen bg-skynude" />
        <div className="w-2 h-screen bg-skyorange" />
        <div className="w-2 h-screen bg-skyblue" />
      </div>
      <div className="flex md:hidden flex-col flex-1 gap-2 bg-white">
        <div className="h-1 w-screen bg-skybrown" />
        <div className="h-1 w-screen bg-skynude" />
        <div className="h-1 w-screen bg-skyorange" />
        <div className="h-1 w-screen bg-skyblue" />
      </div>
      <div className="basis-full md:basis-3/5 bg-white flex flex-col justify-between h-auto md:h-screen p-8">
        <div className="flex flex-col items-center text-center w-full max-w-md mx-auto md:mt-10">
          <div className="mx-auto my-6 rounded-full border-4 border-skyorange p-1 inline-block">
            <div className="rounded-full overflow-hidden border-4 border-skyblue w-42 h-42 md:w-56 md:h-56">
              <Image
                src="/profile.jpg" // Make sure the file exists in /public
                alt="Profile picture of Janneke van Hulten"
                width={224}
                height={224}
                className="rounded-full object-cover "
                priority
              />
            </div>
          </div>
          <h1 className="text-skyblue text-4xl font-bold font-sans">
            Janneke van Hulten
          </h1>
          <h1 className="font-mono text-skyblue text-2xl mt-2">
            North Sea Software Development
          </h1>
          <p className="font-mono text-skyorange mt-4 italic">Your website?</p>
          <p className="font-mono text-skyorange italic">
            Built anywhere, works everywhere.
          </p>
        </div>
        <footer className="w-full  mx-auto text-sm text-skyblue mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
            <div className="flex  gap-4">
              <Link
                href="https://www.linkedin.com/in/janneke-van-hulten-b7a4a7190/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  hover:text-skyorange transition"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-skyblue w-6 h-6 hover:text-skyorange"
                />
              </Link>
              <Link
                href="https://github.com/janseke10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  hover:text-skyorange transition"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-skyblue w-6 h-6 hover:text-skyorange"
                />
              </Link>
            </div>

            <div className="space-x-4 flex flex-row flex-wrap justify-center md:justify-end text-center md:text-right">
              <p>KvK: 88390926</p>

              <p>
                E-mail:{" "}
                <a
                  href="mailto:info@northseasoftware.dev"
                  className="text-skyblue hover:underline hover:text-skyorange"
                >
                  info@northseasoftware.dev
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
