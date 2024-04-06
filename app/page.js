import Image from "next/image";

function Home() {

  return (
    <main className="bg-red-950 min-h-screen" >

      <div className="px-10 justify-center flex pt-5">
        <div className="
         md:max-w-5xl
         w-full
         items-center 
         justify-between
         flex"
        >
          <p className="text-white">
            Muhammad Nafees
          </p>

          <ul className="max-md:hidden flex items-center space-x-4">
            <li><button className="text-white rounded-md px-4 py-2 hover:bg-white hover:text-red-950 transition duration-300"> Home</button></li>
            <li><button className="text-white rounded-md px-4 py-2 hover:bg-white hover:text-red-950 transition duration-300"> Experience</button></li>
            <li><button className="text-white rounded-md px-4 py-2 hover:bg-white hover:text-red-950 transition duration-300"> Projects</button></li>
            <li><button className="text-white rounded-md px-4 py-2 hover:bg-white hover:text-red-950 transition duration-300"> Contact</button></li>
          </ul>

          <div className="md:hidden">
            <button>Nav</button>
          </div>

        </div>
      </div>

      <div className="flex justify-center items-center bg-zinc-950 lg:bg-slate-950 md:bg-green-400  sm:bg-400 xl:bg-red-700">

        <div className="px-10 md:flex items-center justify-between 
      xl:w-9/12
      md:w-10/12
       ">
          <div className="overflow-hidden w-250 h-250 flex items-center justify-center">
            <Image
              src="/Nafees_Image.jpg"
              alt="Nafees Image"
              width={250}
              height={250}
              className="rounded-full 
            bg-black
            "
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="py-1">Hello,i'm </p>
            <h3 className="py-1">Muhammad Nafees</h3>
            <h4 className="py-1">Mobile Application developer</h4>

            <div className="flex">
              <button className="rounded-3xl text-white bg-slate-400 py-2 px-4">
                Download Cv
              </button>
              <button className="rounded-3xl text-white bg-slate-400 py-2 px-4">
                Contact Info
              </button>
            </div>

          </div>
        </div>
      </div>


    </main>
  );
};

export default Home;

// <main className="flex min-h-screen flex-col items-center justify-between p-24">

//   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//       Get started by editing&nbsp;
//       <code className="font-mono font-bold">app/page.js</code>
//     </p>

//     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//       <a
//         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         By{" "}
//         <Image
//           src="/vercel.svg"
//           alt="Vercel Logo"
//           className="dark:invert"
//           width={100}
//           height={24}
//           priority
//         />
//       </a>
//     </div>

//   </div>

//   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//     <Image
//       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//       src="/next.svg"
//       alt="Next.js Logo"
//       width={180}
//       height={37}
//       priority
//     />
//   </div>

//   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//     <a
//       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Docs
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Find in-depth information about Next.js features and API.
//       </p>
//     </a>

//     <a
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Learn
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Learn about Next.js in an interactive course with&nbsp;quizzes!
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Templates{" "}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Explore starter templates for Next.js.
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Deploy{" "}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
//         Instantly deploy your Next.js site to a shareable URL with Vercel.
//       </p>
//     </a>
//   </div>
// </main>
