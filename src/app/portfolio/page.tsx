import Navbar from "@/components/navbar";

export default function Portfolio() {
    return (
        <>
            <Navbar />

            <div className="flex flex-col mt-16 mb-16 px-4">
                <div className="w-3/5 text-center">
                    <h1 className="text-4xl font-bold mb-4">M Usman</h1>
                    <h3 className="text-2xl font-medium text-gray-700 mb-4">
                        I'm a Frontend Developer
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, perspiciatis dolorum ea repellendus quae tempora ab voluptatum possimus, vel vero dicta aspernatur ex accusamus dolorem voluptate libero, eos distinctio modi!
                    </p>
                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out">
                        Download CV
                    </button>
                </div>
              
                {/* <div>
          <img src="/portfolioimage.png" className="w-72 mt-6" alt="Portfolio" />
        </div> */}
            </div>
        </>
    );
}
