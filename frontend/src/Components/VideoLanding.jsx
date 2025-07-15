import React from 'react';

const VideoLanding = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-6">
      <div className="bg-gray-900 rounded-xl p-8 shadow-2xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Start your meet today</h1>
        <p className="text-gray-400 mb-6">Connect, collaborate, and chat with your team.</p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => onStart('create')}
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-lg"
          >
            Start Meeting
          </button>
          <button
            onClick={() => onStart('join')}
            className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg text-lg"
          >
            Join Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoLanding;
