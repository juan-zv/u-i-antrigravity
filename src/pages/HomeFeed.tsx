export default function HomeFeed() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Main Content Canvas */}
      <main className="pt-24 px-6 max-w-7xl mx-auto pb-32 flex-1 w-full">
        {/* Hero Section / Search */}
        <section className="mb-12 relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-8 lg:p-12 text-on-primary">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <span className="material-symbols-outlined text-[15rem] translate-x-20 translate-y-10">
              directions_car
            </span>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tight mb-6">
              Where to?
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-primary-container">
                  near_me
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border-none text-on-primary placeholder:text-on-primary-container focus:ring-2 focus:ring-secondary-container transition-all"
                  placeholder="Starting point"
                  type="text"
                />
              </div>
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-primary-container">
                  location_on
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border-none text-on-primary placeholder:text-on-primary-container focus:ring-2 focus:ring-secondary-container transition-all"
                  placeholder="Your destination"
                  type="text"
                />
              </div>
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity active:scale-95 flex items-center justify-center">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Filters Tonal Layering */}
        <div className="flex flex-wrap gap-3 mb-8 overflow-x-auto pb-2">
          <button className="bg-primary-fixed text-on-primary-fixed px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">calendar_today</span> Today
          </button>
          <button className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-sm">schedule</span> Time
          </button>
          <button className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-sm">attach_money</span> Price
          </button>
          <button className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-sm">groups</span> Seats
          </button>
        </div>

        {/* Available Rides Grid (Asymmetric Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Featured Card (Wide) */}
          <div className="md:col-span-2 bg-surface-container-lowest p-6 rounded-lg flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary-container ring-offset-2"
                  alt="portrait of a confident male student driver in a clean vehicle interior"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ3qafBfFkUbKlDPQz--ehiYdlcaSra-d1ZQiHyidLzGk5E6fBIFXdoHcC0PdueLPjKE-58L_y2_pD4YTiMoyfHktPLf39-yPOsfClkxaXneNAbFj0EjAlU6w0Wb65VzuvQ2YBbi284bK2Vq0m3z_9R_AsCk9jWFgA1-PLqRsBRVis94GcuPiuC8T73V1T16HkIRTFqU6bl68QVi8x1KZhExbYW6tnZyCX3S-tXEX-fnzjmTTduYyHQg6P_0QXU0DDlmey1pxF5hRa"
                />
                <div>
                  <h3 className="font-bold text-lg">Jordan Wells</h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-tertiary-container text-on-tertiary-container text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      Verified Driver
                    </span>
                    <span className="text-xs text-on-surface-variant flex items-center gap-1">
                      <span
                        className="material-symbols-outlined text-xs"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>{" "}
                      4.9
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-headline font-black text-primary">$12</span>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                  Per Seat
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 mb-8">
              <div className="flex-1">
                <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-1">
                  Departure
                </p>
                <p className="font-headline font-bold text-xl">10:30 AM</p>
                <p className="text-sm text-on-surface-variant">Main Campus Library</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-secondary animate-pulse">
                  keyboard_double_arrow_right
                </span>
              </div>
              <div className="flex-1 text-right">
                <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-1">
                  Arrival
                </p>
                <p className="font-headline font-bold text-xl">11:15 AM</p>
                <p className="text-sm text-on-surface-variant">Downtown Commons</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-surface-container-low p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-slate-300"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-slate-400"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-secondary-container flex items-center justify-center text-[10px] font-bold">
                    +1
                  </div>
                </div>
                <span className="text-sm font-medium text-on-surface-variant">2 seats left</span>
              </div>
              <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold hover:opacity-90 transition-opacity active:scale-95">
                Book Now
              </button>
            </div>
          </div>

          {/* Standard Card 1 */}
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  alt="close up profile of a female student with soft lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD72V2uWTNuVCQzq1xcHyBsbqh5e5rzRoU_wGzJRX3RNQW30TYLHBaI2W7urczTb0wqX1PxA55S9hCQDIPXxag0NQAMVUmtFZz1LDT2-ugPcROfWe_58_NUX_hIxATTXQEVZK2jQ7of54mwtuqWmMdgxl3hDqjJLEW65bdDT3k9lRfvqRm1SDKupKFUox9Xnq1C6ZdmjJb-LAoUQXQnNqy3ECtxBDUAVHJqfSIQuCeUIDJRaHkb0wo_LZgReY3T-nzXt1uj4PWcCahA"
                />
                <div>
                  <h3 className="font-bold">Elena Ruiz</h3>
                  <p className="text-xs text-on-surface-variant">Tesla Model 3</p>
                </div>
              </div>
              <span className="text-xl font-headline font-black text-primary">$8</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg">
                  circle
                </span>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
                    01:45 PM
                  </p>
                  <p className="text-sm font-medium">Engineering Bldg</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-l-2 border-dashed border-outline-variant ml-2 pl-4 py-2">
                <span className="material-symbols-outlined text-primary text-lg">
                  location_on
                </span>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
                    02:30 PM
                  </p>
                  <p className="text-sm font-medium">North Gate Mall</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-on-tertiary-container bg-tertiary-fixed px-3 py-1 rounded-full">
                3 seats open
              </span>
              <button className="text-primary font-bold text-sm hover:underline">
                View Details
              </button>
            </div>
          </div>

          {/* Standard Card 2 */}
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  alt="portrait of a young adult driver in casual wear with warm sunlight"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiWxqIPSCKLaSgYHq53FwpOmriFcyrFkc8SrZaVZt7JhVwMiU9HmXjadsENclIVS8VUhqk0vWQ6Xh-VjDaKq7rGpebn5laDlJtgNLVMucqAwDn9bkUfJUtWTW7aj0CR0UMRnJ2BuwYfD6sqqFycuTxtgZ3I_2OVkNXTO7fc2fFztXoG_kA5A1t1kuAveizd2aEHwZi-WFBJW1EyQ5GsQUkdZ2Qx2Uf3FI_HCeLr9FUC9c-wo70emaQHw-89_RUMqnlytBtGTYxH-fM"
                />
                <div>
                  <h3 className="font-bold">Marcus Chen</h3>
                  <p className="text-xs text-on-surface-variant">Honda Civic</p>
                </div>
              </div>
              <span className="text-xl font-headline font-black text-primary">$15</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg">
                  circle
                </span>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
                    04:00 PM
                  </p>
                  <p className="text-sm font-medium">Student Union</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-l-2 border-dashed border-outline-variant ml-2 pl-4 py-2">
                <span className="material-symbols-outlined text-primary text-lg">
                  location_on
                </span>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
                    06:30 PM
                  </p>
                  <p className="text-sm font-medium">Airport Terminal 2</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-error bg-error-container px-3 py-1 rounded-full">
                Last seat!
              </span>
              <button className="text-primary font-bold text-sm hover:underline">
                View Details
              </button>
            </div>
          </div>

          {/* Empty State / Add Suggestion Card */}
          <div className="lg:col-span-1 bg-surface-container-low border-2 border-dashed border-outline-variant rounded-lg p-6 flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary">add</span>
            </div>
            <h3 className="font-bold text-primary">Need a custom route?</h3>
            <p className="text-xs text-on-surface-variant">
              Post a ride request for others to see
            </p>
          </div>
        </div>
      </main>

      {/* FAB for Posting */}
      <button className="fixed bottom-28 right-8 w-16 h-16 rounded-full bg-primary text-on-primary shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center z-40">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
}
