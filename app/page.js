import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center h-[44vh] bg-red-250 gap-4">

        <div className="font-bold text-5xl"> Buy me a chai </div>

        <p className="">
          BTECH CHAI WALA ye hai toh pillo
        </p>

        <div className="mt-2">
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Shuru Kro</button>

          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Band Kro</button>
        </div>



      </div>

      <div className="bg-white h-1 opacity-10 "></div>

      <h1 className="text-2xl font-bold text-center my-4">Chawala free me chai dega</h1>
      <div className="container flex justify-around mx-auto">
        <div className="flex gap-5 justify-between">
          <div className=" bg-slate-400 rounded p-2 text-black font-bold">  <p>Fund krlo kudko</p></div>

        </div>

        <div className="flex gap-5 justify-between">
          <div className=" bg-slate-400 rounded p-2 text-black font-bold">  <p>Fund krlo kudko</p></div>
        </div>

        <div className="flex gap-5 justify-between">
          <div className=" bg-slate-400 rounded p-2 text-black font-bold">  <p>Fund krlo kudko</p></div>
        </div>
      </div>


      <div className="bg-white h-1 opacity-10 mt-4 "></div>

      <h1 className="text-2xl font-bold text-center my-4">Ek Youtube vdo</h1>
    <center>  <div className="mx- pb-7">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FJEZbsI8mXo?si=81jpXu2AlUsWRkNg&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div></center>

    

    </>
  );
}
