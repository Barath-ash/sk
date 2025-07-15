import React, { useRef, useEffect, useState } from 'react';

const CallRoom = () => {
  const localVideoRef = useRef(null);
  const [localStream, setLocalStream] = useState(null);

  useEffect(() => {
    const initStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setLocalStream(stream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Camera access error:', err);
      }
    };
    initStream();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Video Area */}
      <div className="flex flex-1 gap-4 p-6 overflow-auto">
        {/* Local Video */}
        <div className="flex-1 bg-gray-800 p-2 rounded-lg shadow-md relative">
          <span className="absolute top-2 left-2 bg-blue-600 text-xs px-2 py-1 rounded">You</span>
          <video
            ref={localVideoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* Placeholder Remote User */}
        <div className="flex-1 bg-gray-800 p-2 rounded-lg shadow-md relative">
          <span className="absolute top-2 left-2 bg-gray-600 text-xs px-2 py-1 rounded">Remote</span>
          <div className="w-full h-80 bg-black rounded-lg flex items-center justify-center text-gray-500 text-sm">
            Waiting for another user...
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="bg-gray-900 border-t border-gray-700 p-4 h-64 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-3">Chat</h2>
        <div className="bg-gray-800 rounded-lg p-3 text-sm text-gray-300 h-40 overflow-y-scroll">
          {/* Messages will go here */}
          <p className="mb-2">User A: Hello!</p>
          <p className="mb-2">User B: Hi there!</p>
        </div>
        <div className="mt-3 flex">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 rounded-l-lg bg-gray-700 text-white outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-4 rounded-r-lg">Send</button>
        </div>
      </div>
    </div>
  );
};

export default CallRoom;
