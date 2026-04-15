export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="pt-24 px-6 max-w-screen-xl mx-auto flex-1 w-full pb-32">
        {/* Profile Hero Section: Scholarly Luminary Style */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <span className="font-label text-[0.6875rem] font-bold tracking-[0.05em] text-secondary uppercase mb-2 block">
                Student Account
              </span>
              <h2 className="font-headline text-5xl font-extrabold tracking-tight text-primary leading-tight">
                James Sterling
              </h2>
              <p className="font-body text-on-surface-variant text-lg mt-2 flex items-center gap-2">
                Academic Traveler <span className="w-1 h-1 rounded-full bg-outline"></span> Senior Researcher
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <div className="bg-primary-container text-on-primary-fixed-variant px-6 py-4 rounded-lg flex flex-col items-center">
                <span className="font-label text-[0.625rem] tracking-widest uppercase opacity-70">
                  U&I Miles
                </span>
                <span className="font-headline text-3xl font-bold text-primary-fixed">
                  12,450
                </span>
              </div>
            </div>
          </div>

          {/* Bento Status Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="col-span-2 bg-primary text-on-primary p-6 rounded-lg relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-primary-fixed text-sm font-medium mb-1 block">
                  Tier Status
                </span>
                <h3 className="text-2xl font-bold font-headline">Cum Laude Elite</h3>
                <p className="text-sm opacity-80 mt-4 max-w-[180px]">
                  Enjoy priority matching and scholarly lounge access.
                </p>
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                school
              </span>
            </div>
            <div className="bg-surface-container-low p-6 rounded-lg flex flex-col justify-between">
              <span className="material-symbols-outlined text-secondary text-3xl">
                verified_user
              </span>
              <div>
                <span className="text-on-surface-variant text-xs font-semibold block">
                  Verified
                </span>
                <span className="text-on-surface font-bold">BYU Student</span>
              </div>
            </div>
            <div className="bg-tertiary-container text-on-tertiary-container p-6 rounded-lg flex flex-col justify-between">
              <span className="material-symbols-outlined text-on-tertiary-container text-3xl">
                local_fire_department
              </span>
              <div>
                <span className="text-xs font-semibold block">Streak</span>
                <span className="font-bold">14 Successful Rides</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trip History Section */}
        <section className="mt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h3 className="font-headline text-3xl font-bold text-primary tracking-tight">
                Trip History
              </h3>
              <p className="font-body text-on-surface-variant mt-1">
                Review your scholarly journeys across campus.
              </p>
            </div>
            {/* Filter Tabs */}
            <div className="bg-surface-container-high p-1.5 rounded-full flex gap-1">
              <button className="px-6 py-2 rounded-full text-sm font-semibold bg-surface-container-lowest text-primary shadow-sm">
                This Month
              </button>
              <button className="px-6 py-2 rounded-full text-sm font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
                All Time
              </button>
            </div>
          </div>

          {/* Trip List: No-Line Tonal Layering */}
          <div className="space-y-4">
            {/* Trip Card 1 */}
            <div className="bg-surface-container-low hover:bg-surface-container transition-all p-6 rounded-lg flex flex-col md:flex-row items-center gap-6 group">
              <div className="flex-none w-full md:w-32 text-center md:text-left">
                <span className="block font-label text-[0.6875rem] text-secondary font-bold tracking-widest uppercase">
                  Oct 24
                </span>
                <span className="block font-headline text-lg font-bold text-on-surface">
                  08:45 AM
                </span>
              </div>
              <div className="flex-grow w-full">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full border-2 border-secondary"></span>
                  <span className="font-body font-semibold text-on-surface">
                    North Gate Parking
                  </span>
                </div>
                <div className="h-6 ml-[4.5px] border-l-2 border-dashed border-outline-variant my-1"></div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    location_on
                  </span>
                  <span className="font-body font-semibold text-on-surface">
                    Wilkinson Student Union
                  </span>
                </div>
              </div>
              <div className="flex-none flex items-center gap-4 w-full md:w-auto pt-4 md:pt-0 border-t border-outline-variant/10 md:border-0">
                <div className="flex items-center gap-3 pr-4 border-r border-outline-variant/30">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    alt="headshot of a friendly man in a navy polo shirt, student driver profile"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDieD7zGP5SuYly-ZM1JTFhhj2O4xXYab8WT5BjjVPhxpmZgrAyMfzb_ks5TCPSj9B2aOVlxOSgcxDIl5Bvk5IgyfvoakIkrPi9EKgAhq9bYeqmwMIUEq1MuGzb0ikFYxA4TA6Gn8G-QmitNb_AAYtGZkyDmQs3szcWaPbl72e5uoVnggDNDo9b2S6fOcToEfksgPx1Fk8pejF7RWIlAQYunOIvlhu_xi-TQWuJioo9eROgiAtoizuS2pG1OUWZiE4bTIDy2J_tfX-s"
                  />
                  <div>
                    <span className="text-xs text-on-surface-variant block">Driver</span>
                    <span className="text-sm font-bold">Marcus Chen</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end text-tertiary-container gap-0.5 mb-1">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-sm font-bold">4.9</span>
                  </div>
                  <span className="font-headline text-lg font-extrabold text-primary">
                    $4.50
                  </span>
                </div>
              </div>
            </div>

            {/* Trip Card 2 */}
            <div className="bg-surface-container-low hover:bg-surface-container transition-all p-6 rounded-lg flex flex-col md:flex-row items-center gap-6 group">
              <div className="flex-none w-full md:w-32 text-center md:text-left">
                <span className="block font-label text-[0.6875rem] text-secondary font-bold tracking-widest uppercase">
                  Oct 22
                </span>
                <span className="block font-headline text-lg font-bold text-on-surface">
                  02:15 PM
                </span>
              </div>
              <div className="flex-grow w-full">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full border-2 border-secondary"></span>
                  <span className="font-body font-semibold text-on-surface">
                    Marriott Center
                  </span>
                </div>
                <div className="h-6 ml-[4.5px] border-l-2 border-dashed border-outline-variant my-1"></div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    location_on
                  </span>
                  <span className="font-body font-semibold text-on-surface">
                    Library Quad
                  </span>
                </div>
              </div>
              <div className="flex-none flex items-center gap-4 w-full md:w-auto pt-4 md:pt-0 border-t border-outline-variant/10 md:border-0">
                <div className="flex items-center gap-3 pr-4 border-r border-outline-variant/30">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    alt="portrait of a young woman with a warm smile, college student professional photo"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuZPrA_mPRZPME_1u6Tj0dAq9zSq6ZbaosweNyFFGpc56x-MKFqeqtw7UCNxO8Ki32LSm4cl8HcHdwA13Kf0Uc9fvc7Vi182DgbwzJzIvapJAFBAjQ8PJJrEODaUG6W_mL99ZQgoS5JZ7UNTUWQsZFhyh8X77G2Pk0PMLRdxEgoipE2tZIa1ucN11bQYFchGWNyhmf6ukDc2T93sHsCzVQcCWvBayZHule1U3ieN9E9qfpdxyTVPJqwFXQA8SmydUcnz237-BqcvGF"
                  />
                  <div>
                    <span className="text-xs text-on-surface-variant block">Driver</span>
                    <span className="text-sm font-bold">Sarah Jenkins</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end text-tertiary-container gap-0.5 mb-1">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-sm font-bold">5.0</span>
                  </div>
                  <span className="font-headline text-lg font-extrabold text-primary">
                    $3.75
                  </span>
                </div>
              </div>
            </div>

            {/* Trip Card 3 */}
            <div className="bg-surface-container-low hover:bg-surface-container transition-all p-6 rounded-lg flex flex-col md:flex-row items-center gap-6 group">
              <div className="flex-none w-full md:w-32 text-center md:text-left">
                <span className="block font-label text-[0.6875rem] text-secondary font-bold tracking-widest uppercase">
                  Oct 20
                </span>
                <span className="block font-headline text-lg font-bold text-on-surface">
                  06:50 PM
                </span>
              </div>
              <div className="flex-grow w-full">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full border-2 border-secondary"></span>
                  <span className="font-body font-semibold text-on-surface">
                    Heritage Halls
                  </span>
                </div>
                <div className="h-6 ml-[4.5px] border-l-2 border-dashed border-outline-variant my-1"></div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    location_on
                  </span>
                  <span className="font-body font-semibold text-on-surface">
                    Law School
                  </span>
                </div>
              </div>
              <div className="flex-none flex items-center gap-4 w-full md:w-auto pt-4 md:pt-0 border-t border-outline-variant/10 md:border-0">
                <div className="flex items-center gap-3 pr-4 border-r border-outline-variant/30">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    alt="clean-cut college student male portrait with a friendly expression"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx_YRW3QfFdmWp6p5EK_MjMkj-7XebK_AeH_vG-wAdIbRkEcenXNObCZahfT-x3xhL7tECfmD3S3NDj2h0LZcjOSrXfbmV3tTA4iN_eu3StdEuEZShHK798ZCYyZVvQ33LZwicl4cY7jPFAEgnGx7rK0Fnvwp_n2lQmqJsOB-e1wUsDimle9-gQNeWqF9Frtknn1SZam90lNDg1qoIM6UGB9M5K4KoNpKhQ-hNQOgNm3Clw3i39HOGDFt52J9K3DnqROLXeNH8rge2"
                  />
                  <div>
                    <span className="text-xs text-on-surface-variant block">Driver</span>
                    <span className="text-sm font-bold">David Miller</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end text-tertiary-container gap-0.5 mb-1">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-sm font-bold">4.8</span>
                  </div>
                  <span className="font-headline text-lg font-extrabold text-primary">
                    $5.20
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button className="mt-8 w-full py-4 rounded-lg bg-surface-container text-primary font-bold hover:bg-surface-container-high transition-colors">
            View More History
          </button>
        </section>
      </main>
    </div>
  );
}
