"use client";
import { UpdateUserModal } from "@/components/homepage/UpdateUserMadal";
import { authClient } from "@/lib/auth-client";

const MyProfile = () => {
  const userInfo = authClient.useSession();
  const user = userInfo.data?.user;

  return (
    <div className="min-h-screen bg-[#f5f3ef] px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Cover Banner */}
        <div className="h-40 bg-[url('https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg')] bg-cover bg-center"></div>

        {/* Profile Section */}
        <div className="px-6 py-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
          
          {/* Avatar */}
          <img
            src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="user"
            className="w-28 h-28 rounded-full border-4 border-white shadow-md -mt-16"
          />

          {/* Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-[#1a1814]">
              {user?.name || "Guest User"}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {user?.email || "No email available"}
            </p>

            {/* Role / Tag */}
            <span className="inline-block mt-3 px-3 py-1 text-xs bg-[#e8dfd3] text-[#5c4b3b] rounded-full">
              Tile Enthusiast
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t"></div>

        {/* Extra Info Section */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-[#f9f7f4] p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-[#1a1814] mb-2">Account Info</h3>
            <p className="text-sm text-gray-600">
              Joined: Recently
            </p>
            <p className="text-sm text-gray-600">
              Status: Active
            </p>
          </div>

          <div className="bg-[#f9f7f4] p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-[#1a1814] mb-2">Preferences</h3>
            <p className="text-sm text-gray-600">
              Favorite Category: Ceramic Tiles
            </p>
            <p className="text-sm text-gray-600">
              Theme: Minimal Aesthetic
            </p>
          </div>
           <UpdateUserModal/>
        </div>
      </div>
      
    </div>
  );
};

export default MyProfile;