import Image from "next/image";


export default function About() {
  return(<>
    
    <title>
    Asif Hussain's Portfolio
   </title>
 
<section className="my-8 bg-yellow-100 p-4 rounded-lg">
         <div className="flex flex-col md:flex-row items-center">
          <div className="md:mr-8">
           <h2 className="text-2xl font-bold mb-2">
            About Me
           </h2>
           <p className="text-lg">
            Hello, I am Asif Hussain, a passionate Frontend Developer and WordPress expert. 
            I have a strong background in computer education and various diplomas in computer hardware, networking, 
            and Microsoft automation.
           </p>
          </div>
          <Image alt="Portrait of Asif Hussain" src={require("../../app/components/public/asif.jpg")} className="rounded-full w-[200px] h-[200px] ml-8"
           height={200} width={200}/>
         </div>
        </section>

</>
  );
}
