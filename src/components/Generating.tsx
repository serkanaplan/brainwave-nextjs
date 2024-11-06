import Image from "next/image";

const Generating = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <Image className="w-5 h-5 mr-4" src="/loading.png" alt="Loading" width={100} height={100}/>
      AI is generating
    </div>
  );
};

export default Generating;
