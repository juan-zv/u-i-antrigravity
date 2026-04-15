export default function PostRidePage() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="pt-24 px-6 max-w-2xl mx-auto flex-1 w-full pb-32">
        {/* Hero Section Asymmetric */}
        <section className="mb-12 relative">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary-fixed/30 rounded-full blur-3xl -z-10"></div>
          <h1 className="text-[3.5rem] leading-tight font-black font-headline text-primary mb-2">
            Share your journey.
          </h1>
          <p className="text-on-surface-variant font-body max-w-md">
            Help fellow students get where they need to go and save on fuel costs.
          </p>
        </section>

        {/* Post Ride Form Bento-inspired Grid */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Route Section */}
          <div className="col-span-full bg-surface-container-low p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-label uppercase tracking-widest text-on-tertiary-fixed-variant bg-tertiary-fixed px-3 py-1 rounded-full">
                Origin & Destination
              </span>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-secondary">
                  location_on
                </span>
                <input
                  className="w-full pl-12 pr-6 py-4 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary-fixed font-body text-on-surface placeholder:text-outline-variant"
                  placeholder="Starting from..."
                  type="text"
                />
              </div>
              <div className="flex justify-center -my-3 relative z-10">
                <div className="bg-surface-container-lowest p-2 rounded-full shadow-sm">
                  <span className="material-symbols-outlined text-outline">
                    swap_vert
                  </span>
                </div>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-error">
                  flag
                </span>
                <input
                  className="w-full pl-12 pr-6 py-4 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary-fixed font-body text-on-surface placeholder:text-outline-variant"
                  placeholder="Where to?"
                  type="text"
                />
              </div>
            </div>
          </div>

          {/* Date & Time */}
          <div className="bg-surface-container-low p-8 rounded-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-4 block">
                Departure
              </span>
              <div className="space-y-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
                    calendar_today
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary-fixed font-body text-on-surface"
                    type="date"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
                    schedule
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary-fixed font-body text-on-surface"
                    type="time"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Seats & Price */}
          <div className="bg-surface-container-low p-8 rounded-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-4 block">
                Ride Details
              </span>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-surface-container-high p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-outline">
                      airline_seat_recline_normal
                    </span>
                    <span className="text-on-surface font-medium">
                      Available Seats
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-lowest text-primary active:scale-90"
                      type="button"
                    >
                      -
                    </button>
                    <span className="text-lg font-bold">2</span>
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-on-primary active:scale-90"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
                    payments
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary-fixed font-body text-on-surface placeholder:text-outline-variant"
                    placeholder="Price per seat"
                    type="number"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-outline font-label uppercase text-[10px]">
                    USD
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Card */}
          <div className="col-span-full bg-primary p-8 rounded-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="material-symbols-outlined text-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified_user
                  </span>
                  <h3 className="text-on-primary font-headline font-bold text-xl">
                    Verified Student Driver
                  </h3>
                </div>
                <p className="text-on-primary-container font-body text-sm max-w-sm">
                  Posting this ride will add 15 U&I Miles to your academic traveler profile.
                </p>
              </div>
              <button
                className="bg-secondary-container text-on-secondary-container px-12 py-5 rounded-full font-headline font-extrabold text-lg shadow-xl hover:opacity-90 active:scale-95 transition-all"
                type="submit"
              >
                Post Ride
              </button>
            </div>
          </div>
        </form>

        {/* Decorative Map Background/Preview */}
        <div className="mt-12 rounded-lg overflow-hidden h-48 relative grayscale contrast-125 opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="Minimalist abstract map view of urban city streets with clean lines and high contrast architectural shapes"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqgWJ0cdhOEWkmp5ZZvHJYRvB4N9eA9aRDIcU7vQbOu4I811sgAOn8mA11b38v3lKy1qcufpZ9qsk9IfW8phzCyaKBsGmHtoIrn5HNlwXEiDvdTk0uv_cvl36IZTtvgKz_Hx-YFeTAglxtHrbocubJKSKJR6t0SVCV_Xz7vBzSLuUCx_NHSf8O-3tNCWD1VmM1gt3NoWKxB_xD9bbgzATvWkhixR65CScDJtPmtM41BdEZ6D3bfPKNGrPAE-we8lhdu_6VJtMICHl6"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
        </div>
      </main>
    </div>
  );
}
