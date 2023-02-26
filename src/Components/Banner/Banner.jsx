import React from 'react';

const Banner = () => {
    return (
        <section id="banner" className='bg-banner bg-cover bg-center bg-no-repeat min-h-[400px] w-full grid relative'>
            <div className="bg-black w-full h-full absolute opacity-25 left-0 right-0 "></div>
            <div className="container max-w-4xl mx-auto text-center my-auto place-items-center z-[999] px-4">
                <h1 className="text-4xl font-bold py-6 text-white">Download High Quality Images by creators</h1>
                <p className="text-sm text-center text-white">Over 2.3 million stock images by our talented community</p>
                {/* form */}
                <div class="relative">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>

                    <input type="text" class="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Search high-resolution images" />
                </div>
            </div>
        </section>
    );
};

export default Banner;