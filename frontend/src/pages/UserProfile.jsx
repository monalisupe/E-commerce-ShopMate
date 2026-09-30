function UserProfile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2A085C]">
      
      {/* Profile Container - Adjusted size */}
      <div className="w-full max-w-md rounded-2xl bg-white/10 p-6 backdrop-blur-sm shadow-xl">
        
        {/* Header */}
        <div className="mb-6 text-center border-b border-white/10 pb-4">
          <h1 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
            <span>👤</span> USER PROFILE
          </h1>
        </div>

        {/* Personal Information Section */}
        <div className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
            Personal Information
          </h2>
          
          {/* Name */}
          <div className="rounded-lg bg-white/10 hover:bg-[#a875f5] p-4 transition-all duration-300 cursor-pointer">
            <p className="text-sm text-white/70">Name : </p>
          </div>

          {/* Email */}
          <div className="rounded-lg bg-white/10 hover:bg-[#a875f5] p-4 transition-all duration-300 cursor-pointer">
            <p className="text-sm text-white/70">Email : </p>
          </div>

          {/* Contact */}
          <div className="rounded-lg bg-white/10 hover:bg-[#a875f5] p-4 transition-all duration-300 cursor-pointer">
            <p className="text-sm text-white/70">Contact : </p>
          </div>
        </div>

        {/* Address Information Section */}
        <div className="mt-6 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
            Address Information : 
          </h2>
          
          {/* Address */}
          <div className="rounded-lg bg-white/10 hover:bg-[#a875f5] p-4 transition-all duration-300 cursor-pointer">
            <p className="text-sm text-white/70">Address : </p>
          </div>

          {/* Country */}
          <div className="rounded-lg bg-white/10 hover:bg-[#a875f5] p-4 transition-all duration-300 cursor-pointer">
            <p className="text-sm text-white/70">Country : </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <button className="w-full rounded-lg bg-white/20 hover:bg-[#a875f5] px-4 py-3 text-white font-semibold transition-all duration-300 hover:scale-[1.02]">
            ✏️ Edit Profile
          </button>
        </div>

        {/* Profile Stats */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="text-center rounded-lg bg-white/5 p-2">
            <div className="text-white font-bold">24</div>
            <div className="text-xs text-white/50">Orders</div>
          </div>
          <div className="text-center rounded-lg bg-white/5 p-2">
            <div className="text-white font-bold">4.8</div>
            <div className="text-xs text-white/50">Rating</div>
          </div>
          <div className="text-center rounded-lg bg-white/5 p-2">
            <div className="text-white font-bold">12</div>
            <div className="text-xs text-white/50">Reviews</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserProfile;