import React from 'react';

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold text-primary uppercase">Features</h2>
        <p className="mt-1 text-4xl leading-10 font-extrabold text-gray-900">
          Discover Our Unique Features
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
        </p>
      </div>
      <div className="mt-10 max-w-7xl mx-auto grid gap-8 lg:grid-cols-2 lg:gap-y-12 px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3-3 3 3m0 6l-3 3-3-3" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Discover</h3>
            <p className="mt-2 text-base text-gray-500">
              Collaborate and Create: Suggest ideas and explore contributions from other researchers.
            </p>
            <a href="#" className="mt-3 text-primary hover:text-primary">
              Explore Discovery →
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.094 12.094 0 0118 9c0-1.177-.12-2.32-.34-3.417M18 9a12.1 12.1 0 01-6 2.417M6 9c0 2.637 1.306 4.945 3.34 6.417M6 9c-1.596-.96-3.036-2.09-4.24-3.34" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Publication</h3>
            <p className="mt-2 text-base text-gray-500">
              Share Your Work: Publish refined research papers and articles.
            </p>
            <a href="#" className="mt-3 text-primary hover:text-primary">
              Publish Research →
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Equipment</h3>
            <p className="mt-2 text-base text-gray-500">
              Access Essential Tools: Offer and seek necessary research equipment.
            </p>
            <a href="#" className="mt-3 text-primary hover:text-primary">
              Access Equipment →
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Research Units</h3>
            <p className="mt-2 text-base text-gray-500">
              Find Partners: Locate nearby research institutes for collaboration.
            </p>
            <a href="#" className="mt-3 text-primary hover:text-primary">
              Find Research Units →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
