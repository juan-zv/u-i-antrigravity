export default function ChatPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">

      <main className="pt-20 pb-32 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 h-[calc(100vh-2rem)] overflow-hidden w-full">
        {/* Conversation List (Sidebar on Desktop) */}
        <section className="w-full md:w-80 lg:w-96 flex flex-col gap-4 overflow-y-auto shrink-0">
          <h2 className="font-headline text-xl font-bold px-2 text-primary">
            Active Chats
          </h2>
          <div className="space-y-3">
            {/* Active Conversation Item */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex items-center gap-4 transition-colors cursor-pointer border-l-4 border-secondary">
              <img
                className="w-12 h-12 rounded-full object-cover"
                alt="headshot of a smiling man in a denim jacket"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3trNST8avwCFTNIReWATRUQs-15TfRVQI6K3CAb0IArgQS6eAfMFanX3sn_xjK8BSs-BVrCEfhhQ0HeAK9xiAv3HkwGDeBSWLYftMrQbvg-pMAu0owLuU-rcTx8EwgQdNYYiDElfRJhfgfDAPEEj_V2LuxcttQSjWK41ZmvI2AHWaQ58x82x2zAdfVxG3oYeM6nTkFb9Hr60REqt_QkgEkCTjiUSwhVIVhWH_0Cu_ZjuLx3W-Fqu1_i7XBcq_na5vkPBrmcUZXMvP"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-headline text-sm font-bold text-blue-900 truncate">
                    David Miller (Driver)
                  </h3>
                  <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">
                    12:45 PM
                  </span>
                </div>
                <p className="text-sm text-blue-900/70 truncate font-medium">
                  I'm outside the Student Union now.
                </p>
              </div>
            </div>

            {/* Inactive Conversation Item */}
            <div className="bg-surface-container-low p-4 rounded-lg flex items-center gap-4 hover:bg-surface-container transition-colors cursor-pointer">
              <img
                className="w-12 h-12 rounded-full object-cover grayscale opacity-70"
                alt="profile photo of a young woman"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDov7l-uQK4YttSuFwE1QK9cULT_Spb4DPm4pfh4YkC842OpGcbRCaO2_gx9k3xmX88BiJ50xhqnL1NFnf-4VbCnqdsoN7R6fKRAYK8VvcW9c1m5EYR7YjclTDqeI8wwfLM5kVFAuDS3uTfDrtzUlTuTeLj7tlbj2hB2xpyY2C7W_vNnY3uGH6cTWK7KsMt6wEYZdMxH-qc6cuBDtm2TjJbBS2C3aROv7KU7XEoKdFow1eCkBhNkjuBS1uZ6OeONrv_NqQGm8T9ddi7"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-headline text-sm font-bold text-on-surface truncate">
                    Sarah Jenkins
                  </h3>
                  <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">
                    TUE
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant truncate">
                  Thanks for the ride last night!
                </p>
              </div>
            </div>

            <div className="bg-surface-container-low p-4 rounded-lg flex items-center gap-4 hover:bg-surface-container transition-colors cursor-pointer">
              <img
                className="w-12 h-12 rounded-full object-cover grayscale opacity-70"
                alt="middle-aged man with beard smiling"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsSC5FWjE--wKb1RLDuoCGP3HyrtfYYd6f-MlAbmlUfnkQ-hE23MLla-UZudDptZ0zBjY1gLLzR7VM52ZsrzSCrTL4XDqqsqCsAOMJ3_PZFmsWoX8dCjqnD6gVvCpBng3aBMKJfNwrF9Slax5OqAWaamW1Vp8f6SFIshZOPORDiaz5nGFGarjBU2dNFWQWJAjdCakSTjSKoPSZfOCqkmBl3xtdQ-vCEqsBOAnY4oz19bR_zBgdru8Ztqb822JC4yu3b8E9URgkYquY"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-headline text-sm font-bold text-on-surface truncate">
                    Prof. Higgins
                  </h3>
                  <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">
                    MON
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant truncate">
                  Is the 4:00 PM ride still on?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Message Interface (Main Area) */}
        <section className="flex-1 flex flex-col bg-surface-container-lowest rounded-lg shadow-sm border border-outline-variant/10 overflow-hidden relative">
          {/* Chat Header */}
          <div className="p-4 flex items-center justify-between bg-surface-container-low/50 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  alt="driver portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDxZ1higRIUkyG4KUJf7FCAmcBQKHuHGtWnjQHsMcl5kO4nXbrg_ClHaCDfucPSCf8-ZtkSqRZ5p9mUlqBXwVPWEUVAjO6ZtBcfvmeN13GTt_a4sT7neLolm-mAznmLKQ4Hhq8MMMHIfbbRdbPraWEY2jwRrv7-b6h95FxHtbYke6mCfvJyyH5CC2bBKnaTappM2JmG5zYlogcNqaaUUycx5ZY3oYaRxP-rwZxGhBvE9f6yBP2EXiIy4ms1Y1i5ICM3_hMk0CXkuSu"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h2 className="font-headline text-base font-bold text-primary leading-tight">
                  David Miller
                </h2>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-container">
                    verified
                  </span>
                  <span className="font-label text-[10px] text-on-tertiary-container uppercase tracking-widest">
                    Verified Driver
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary-container text-on-secondary-container active:scale-95 transition-transform">
                <span className="material-symbols-outlined">call</span>
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:bg-surface-variant transition-colors">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col">
            <div className="self-center">
              <span className="bg-surface-container-high px-4 py-1 rounded-full font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
                Today
              </span>
            </div>

            {/* Driver Message */}
            <div className="flex flex-col items-start max-w-[85%] gap-1">
              <div className="bg-surface-container-low text-on-surface p-4 rounded-2xl rounded-tl-none">
                <p className="text-sm leading-relaxed">
                  Hey there! I'm David, your driver for the trip to North Campus. I just started the engine.
                </p>
              </div>
              <span className="font-label text-[10px] text-on-surface-variant px-1">
                12:30 PM
              </span>
            </div>

            {/* User Message */}
            <div className="flex flex-col items-end max-w-[85%] self-end gap-1">
              <div className="bg-primary text-on-primary p-4 rounded-2xl rounded-tr-none shadow-md">
                <p className="text-sm leading-relaxed">
                  Great, thanks David! I'm just packing my laptop. I'll be at the main entrance in 5 mins.
                </p>
              </div>
              <div className="flex items-center gap-1 px-1">
                <span className="font-label text-[10px] text-on-surface-variant">
                  12:32 PM
                </span>
                <span
                  className="material-symbols-outlined text-[14px] text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  done_all
                </span>
              </div>
            </div>

            {/* Driver Message */}
            <div className="flex flex-col items-start max-w-[85%] gap-1">
              <div className="bg-surface-container-low text-on-surface p-4 rounded-2xl rounded-tl-none">
                <p className="text-sm leading-relaxed">
                  Perfect. The traffic looks clear. I'm driving a Blue Toyota Camry with license plate COUG-24.
                </p>
              </div>
              <span className="font-label text-[10px] text-on-surface-variant px-1">
                12:35 PM
              </span>
            </div>

            {/* System Notice (Glassmorphism card) */}
            <div className="self-center bg-tertiary-container/10 border border-tertiary-container/20 p-4 rounded-lg backdrop-blur-sm max-w-sm text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="material-symbols-outlined text-on-tertiary-container text-sm">
                  local_taxi
                </span>
                <span className="font-label text-[10px] text-on-tertiary-container uppercase tracking-tighter font-bold">
                  Driver Arrived
                </span>
              </div>
              <p className="text-xs text-on-tertiary-fixed-variant">
                David is waiting at the designated pickup point.
              </p>
            </div>

            {/* Last Driver Message */}
            <div className="flex flex-col items-start max-w-[85%] gap-1">
              <div className="bg-surface-container-low text-on-surface p-4 rounded-2xl rounded-tl-none">
                <p className="text-sm leading-relaxed">
                  I'm outside the Student Union now. Parked near the fountain.
                </p>
              </div>
              <span className="font-label text-[10px] text-on-surface-variant px-1">
                12:45 PM
              </span>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 bg-surface-container-lowest border-t border-outline-variant/10">
            <div className="flex items-end gap-3 bg-surface-container-high rounded-lg p-2">
              <button className="p-2 text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined">add_circle</span>
              </button>
              <textarea
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm resize-none py-2 max-h-32 placeholder-slate-400"
                placeholder="Message David..."
                rows={1}
              ></textarea>
              <button className="bg-primary text-on-primary p-3 rounded-full flex items-center justify-center active:scale-90 transition-transform">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  send
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
