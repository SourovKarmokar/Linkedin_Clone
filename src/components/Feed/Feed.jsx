import React, { useEffect, useState } from "react";
import { Image, Video, FileText } from "lucide-react";
import profile from "../../assets/profile.png";
import { 
  getDatabase, 
  ref, 
  query, 
  orderByChild, 
  limitToLast, 
  onValue, 
  push, 
  set 
} from "firebase/database";

const Feed = () => {
  const db = getDatabase();
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  // Load posts from Firebase
  useEffect(() => {
    const postsRef = ref(db, "posts");
    const postsQuery = query(postsRef, orderByChild("timestamp"), limitToLast(50));

    onValue(postsQuery, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedPosts = Object.values(data).reverse(); // latest first
        setPosts(loadedPosts);
      } else {
        setPosts([]);
      }
    });
  }, [db]);

  // Send new post
  const sendPost = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const postsRef = ref(db, "posts");
    const newPostRef = push(postsRef); // create unique id

    const newPost = {
      id: newPostRef.key, // Firebase unique key
      name: "Nazir Hossain",
      title: "Founder & CEO @ FounderSheba",
      time: new Date().toLocaleString(),
      timestamp: Date.now(),
      content: input,
    };

    // Save post in Firebase
    set(newPostRef, newPost);

    setInput("");
  };

  return (
    <div className="flex-1 max-w-[600px]">
      {/* Post input */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <form onSubmit={sendPost} className="flex items-center gap-3 w-full">
          {/* Profile circle */}
          <img
            src={profile}
            alt="profile"
            className="h-12 w-12 rounded-full"
          />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Start a post"
            className="w-full border rounded-full px-4 py-2 text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </form>

        {/* Post options (Video, Photo, Write Article) */}
        <div className="flex justify-between mt-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-black">
            <Video size={20} /> <span className="hidden sm:inline">Video</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-black">
            <Image size={20} /> <span className="hidden sm:inline">Photo</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-black">
            <FileText size={20} />{" "}
            <span className="hidden sm:inline">Write article</span>
          </button>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
          {/* Post Header */}
          <div className="flex items-center gap-3">
            <img
              src={profile}
              alt="profile"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h2 className="font-semibold">{post.name}</h2>
              <p className="text-xs text-gray-500">{post.title}</p>
              <p className="text-xs text-gray-400">{post.time} • 🌐</p>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-sm text-gray-800 mt-3">{post.content}</p>

          {/* Reactions */}
          <div className="flex justify-between items-center mt-3 text-gray-500 text-sm">
            <span>👍 ❤️ 👏 0 others</span>
            <span>0 comments</span>
          </div>

          {/* Post Buttons */}
          <div className="flex justify-between mt-3 border-t pt-2">
            <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded">
              👍 Like
            </button>
            <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded">
              💬 Comment
            </button>
            <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded">
              🔁 Repost
            </button>
            <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded">
              ✉️ Send
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
