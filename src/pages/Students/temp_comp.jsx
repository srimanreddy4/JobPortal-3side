import React from 'react';

function LandingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Create a profile, find your community, build your career</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-8 rounded-lg bg-purple-100">
          <img src="/path/to/real-icon.svg" alt="Real" className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Real</h2>
          <p className="text-gray-600">The authentic and helpful place where 15M+ students get guidance, inspo, info, and connections straight from the source.</p>
        </div>

        <div className="text-center p-8 rounded-lg bg-purple-100">
          <img src="/path/to/relevant-icon.svg" alt="Relevant" className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Relevant</h2>
          <p className="text-gray-600">Built just for you with personalized content from your school, experts, and +1M companies.</p>
        </div>

        <div className="text-center p-8 rounded-lg bg-purple-100">
          <img src="/path/to/future-focused-icon.svg" alt="Future-focused" className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Future-focused</h2>
          <p className="text-gray-600">The career platform you'll actually use with jobs, internships, and opportunities you won't find anywhere else.</p>
        </div>
      </div>
    </div>
  );
}

export function CompanyLogos() {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold text-center mb-8">These companies and more want to hire people like you</h1>
  
        <div className="flex flex-wrap justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Hilton_Hotels_logo.svg/1024px-Hilton_Hotels_logo.svg.png" alt="Hilton" className="w-24 h-12 mx-4 mb-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Kraft_Heinz_Logo.svg/1024px-Kraft_Heinz_Logo.svg.png" alt="Kraft Heinz" className="w-24 h-12 mx-4 mb-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/TikTok_logo.svg/1280px-TikTok_logo.svg.png" alt="TikTok" className="w-24 h-12 mx-4 mb-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Teach_for_America_logo.svg/1280px-Teach_for_America_logo.svg.png" alt="Teach For America" className="w-24 h-12 mx-4 mb-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/CDW_logo.svg/1024px-CDW_logo.svg.png" alt="CDW" className="w-24 h-12 mx-4 mb-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/McDonald%27s_Golden_Arches_logo.svg/1280px-McDonald%27s_Golden_Arches_logo.svg.png" alt="McDonald's" className="w-24 h-12 mx-4 mb-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Target_logo.svg/1024px-Target_logo.svg.png" alt="Target" className="w-24 h-12 mx-4 mb-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Clean_Harbors_logo.svg/1024px-Clean_Harbors_logo.svg.png" alt="Clean Harbors" className="w-24 h-12 mx-4 mb-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ernst_%26_Young_logo.svg/1024px-Ernst_%26_Young_logo.svg.png" alt="EY" className="w-24 h-12 mx-4 mb-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Nike_Logo.svg/1024px-Nike_Logo.svg.png" alt="Nike" className="w-24 h-12 mx-4 mb-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/IBM_logo.svg/1024px-IBM_logo.svg.png" alt="IBM" className="w-24 h-12 mx-4 mb-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Viasat_logo.svg/1024px-Viasat_logo.svg.png" alt="Viasat" className="w-24 h-12 mx-4 mb-4" />
        </div>
      </div>
    );
  }
  

export default LandingPage;