import Image from "next/image";
 import faid5 from "@/../public/images/rosariokalavina.jpg";

export default function News() {
  return (
    <main className="p-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-green-600 mb-4 text-center">Updates</h1>
      
      <article className="bg-white p-6 shadow-md rounded-lg mb-8 flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
          <Image
            src={faid5} // Make sure this is the correct path to the image
            alt="Rosario Kalavina"
            width={300}  // Adjust the width as needed
            height={300} // Adjust the height as needed
            className="rounded-lg object-cover"
          />
        </div>

        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Director Rosario Kalavina Calls for Independent Inquiry into Dr. Saulos Chilima&apos;s Death
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Director For Future For All in Development (FAID), Rosario Kalavina, has strongly joined calls for an independent inquiry to be instituted following the untimely death of former Vice President Dr. Saulos Chilima and eight others in June in a plane crash. These individuals were public figures, and they deserve a thorough investigation into what exactly happened to them.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
          &quot;As a bonafide Malawian, I feel there is no harm in respecting the wish of Malawians to institute an independent inquiry unless there are hidden agendas and fear. Dilly dallying in responding to our plea for an independent inquiry may raise more questions as to why,&quot; said Kalavina.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Malawians have many unanswered questions regarding the plane crash, and we believe we have the right to information as taxpayers. Denying us access to the truth of the matter is unacceptable. The preliminary report from German experts still leaves us with more questions. It is the general outcry of Malawians to know the truth surrounding this matter without political interference or deliberate delaying of the entire process.
          </p>
        </div>
      </article>

      {/* You can add more news articles or updates below */}
    </main>
  );
}
