"use client";
import { UpdateUserModal } from "@/components/homepage/UpdateUserMadal";
import { authClient } from "@/lib/auth-client";

const MyProfile = () => {
  const userInfo = authClient.useSession();
  const user = userInfo.data?.user;

  return (
    <div className="min-h-screen px-6 py-12 flex justify-center items-center">

      <div className="w-full max-w-4xl">

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Profile Section */}
          <div className="px-8 py-10 flex flex-col md:flex-row gap-8 items-center md:items-start">

            {/* Avatar */}
            <div>
              <img
                src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="user"
                className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-md object-cover"
              />
            </div>

            {/* Info */}
            <div className="text-center md:text-left flex-1">

              <h2 className="text-3xl font-bold text-gray-800">
                {user?.name || "Guest User"}
              </h2>

              <p className="text-gray-500 mt-1">
                {user?.email || "No email available"}
              </p>

              <span className="inline-block mt-4 px-4 py-1 text-sm bg-gray-100 text-[#5B7E3C] rounded-full">
                Tile Enthusiast
              </span>

              {/* Button */}
              <div className="mt-6">
                <UpdateUserModal />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t" />

          {/* Info Grid */}
          <div className="p-8 grid md:grid-cols-2 gap-6">

            <div className="bg-gray-50 p-5 rounded-xl hover:shadow-md transition">
              <h3 className="text-[#5B7E3C] font-semibold mb-3">
                Account Info
              </h3>
              <p className="text-gray-500 text-sm">Joined: Recently</p>
              <p className="text-gray-500 text-sm">Status: Active</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl hover:shadow-md transition">
              <h3 className="text-[#5B7E3C] font-semibold mb-3">
                Preferences
              </h3>
              <p className="text-gray-500 text-sm">
                Favorite Category: Ceramic Tiles
              </p>
              <p className="text-gray-500 text-sm">
                Theme: Minimal Aesthetic
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;