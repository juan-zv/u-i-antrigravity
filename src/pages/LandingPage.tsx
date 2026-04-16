import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-slate-50/70 backdrop-blur-xl shadow-sm h-16 flex justify-between items-center px-6">
        <div className="flex items-center gap-3">
          <span
            className="material-symbols-outlined text-blue-900"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            directions_car
          </span>
          <span className="font-headline font-black text-xl text-blue-900 tracking-tight">
            U&I Ride
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            className="text-blue-900 font-bold font-headline text-sm tracking-tight hover:opacity-80 transition-opacity"
            to="/auth"
          >
            Rides
          </Link>
          <a
            className="text-slate-500 font-headline text-sm tracking-tight hover:opacity-80 transition-opacity"
            href="#"
          >
            Safety
          </a>
          <div className="h-8 w-[1px] bg-outline-variant/30"></div>
          <Link to="/auth" className="px-6 py-2 flex items-center justify-center rounded-full bg-primary text-on-primary font-headline text-sm font-bold active:scale-95 transition-all shadow-sm">
            Sign In / Sign Up
          </Link>
        </div>
        <button className="md:hidden material-symbols-outlined text-blue-900">
          menu
        </button>
      </nav>

      <main className="pt-16 pb-32 flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[795px] flex flex-col justify-center px-6 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-20 scale-105"
              alt="Panoramic aerial view of a prestigious collegiate campus with brick buildings and lush green spaces during a golden sunset"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwxb61H0mo0eDWXmZVuGJM5dd9tTRNyYuwZv1ovL3mcVGy0Wc4co2mHkay9eug4Umqp9HNH2lqoh079Aa3QDv4CB27xQH7Wt-TMQS-2Zj6bzQqsotU4KXcoZl91GG2saXBZ_vpfCl5e813g9_Gec2luOBwFTHkjcfQSfLoYbZ5Z9Tj4ijKPv8v8U59uJf_jgHtnn3BKinA2lN_lter__iIn7jlZ_zFPtsE7iptS6wuzxMq13OpfYTUiyfYbaFx8tiIYY5zQLy2apyp"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container mb-8">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <span className="font-label text-[10px] font-bold tracking-widest uppercase">
                Verified Student Network
              </span>
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-8xl text-primary leading-none tracking-tighter mb-8">
              Your Campus.<br />
              <span className="text-surface-tint">Your Community.</span><br />
              Your Ride.
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              The exclusive carpooling network for students. Connect with peer
              drivers heading your way, split costs, and build a safer campus
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth" className="px-10 py-5 rounded-full bg-primary text-on-primary font-headline text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center">
                Log In
              </Link>
              <Link to="/auth" className="px-10 py-5 rounded-full bg-surface-container-highest text-primary font-headline text-lg font-bold hover:bg-surface-container-high transition-all text-center flex items-center justify-center">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Floating Bento UI Cards */}
          <div className="hidden xl:grid grid-cols-2 gap-6 absolute right-24 top-1/2 -translate-y-1/2 w-[500px]">
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant/10 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    person
                  </span>
                </div>
                <div>
                  <p className="font-headline font-bold text-primary">
                    Academic Traveler
                  </p>
                  <p className="font-label text-xs text-on-tertiary-container">
                    1,250 Cougar Miles
                  </p>
                </div>
              </div>
              <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-surface-tint"></div>
              </div>
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-xl translate-y-8 transform rotate-2">
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-on-primary">
                  directions_car
                </span>
                <span className="bg-tertiary-container text-on-tertiary-container text-[10px] px-2 py-1 rounded-full font-bold">
                  LIVE
                </span>
              </div>
              <p className="font-headline text-white text-xl font-bold mb-1">
                Ride to Provo
              </p>
              <p className="text-on-primary-container text-sm">
                Leaves in 12 mins
              </p>
            </div>
            <div className="col-span-2 bg-surface-container-low p-6 rounded-lg flex items-center justify-between">
              <div className="flex -space-x-3">
                <img
                  className="w-10 h-10 rounded-full border-2 border-surface"
                  alt="Student 1"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtsdAtClv0IQUIqtFp-6WkFsvey3d6E6HoxiX-kJI5HZhWCl_8kwMec8xE0TvFvbimV6yD97wo8WpkZI9a0_oRVSeBVR8Ipts6FpVSPQsfLLoxYKUU51UmumexzxoQrxdHPiJVNvGih2F2Qh2hMe4uLWw0bOp4P8VDEv4aOUTyeyjkgH_lZr46MMFzLBPr4kcBUh3frgOARi1SedBs2Jo58Y9e7aDFIccg3WCE57i8iKeMBCYG-eA7VwyG1NnQlTOf4SPwEy7lzTyM"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-surface"
                  alt="Student 2"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0KE5m3BUItABvp8fp3-n0agRrfoNYyRCKQi2hqHMJ-Z_yZPzNb3h0l6M6HUF0Wa7Fc-uS8DKrgHHled5rdYvbtON-xSoDMYZUjFteyEAoEpjaTTrKFpi3ZaDSoQmyDc3i6dAKwqrvADUKvSaYNvZSjyj_NkKWt5dvU_nN0ogQ8VoyzPbLeEX5rCLK7K_Hgi1GPTIPPxw1F85Xbjv4ZHAd-StCz2E2Frxis81bpjXDX3feC8bYgLWJv9qJNltAsnNa0uFGWB0-hFC7"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-surface"
                  alt="Student 3"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFqthdL4zZXDNMOjwcVVwUIUvDbFzLofKuqjooxXyZbf-TBcG9ACR55pcLmEHTbeOjHnBMhdAcI0pYDz6sBCbpSIibiMyuQ8F9mL2jK6m6FTvBClokFn5penAnyrntvFtxchu4bvZxzzH97UX1--2If-2jJd5dgKuvLcShcl0itYcMoBO4TqS4OstldVzBZy1bUIhZSXjBEWXE7Jwh_mEBFdO-mVW2AnkAMcOKsWGEYxBd69JkOuJ--k-OMhlEdhGKH-AKDXMH6me5"
                />
                <div className="w-10 h-10 rounded-full bg-primary-fixed border-2 border-surface flex items-center justify-center text-[10px] font-bold text-primary">
                  +42
                </div>
              </div>
              <p className="font-label text-xs text-outline font-medium tracking-tight">
                STUDENTS ONLINE NOW
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="px-6 lg:px-24 py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline font-extrabold text-4xl text-primary tracking-tight mb-4">
                Transit that understands campus life.
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                No more waiting for buses or expensive solo commutes. U&I Ride
                is built by students, for students, focusing on the three
                pillars of modern campus travel.
              </p>
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-outline-variant mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-lg bg-surface-container-lowest hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  shield
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl text-primary mb-4">
                Safety First
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Verified student network limits riders and drivers to active university members, keeping the community trusted and secure.
              </p>
            </div>
            <div className="group p-8 rounded-lg bg-surface-container-low hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  payments
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl text-primary mb-4">
                Split Costs
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                We make it extremely easy to chip in for gas. Suggested contribution tracking allows guilt-free splitting transparently.
              </p>
            </div>
            <div className="group p-8 rounded-lg bg-surface-container-lowest hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  schedule
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl text-primary mb-4">
                Student Schedule
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Filter commutes by standard block schedules or major campus events. Catch rides to distant housing exactly when classes end.
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic Map Teaser Section */}
        <section className="px-6 lg:px-24 py-12">
          <div className="bg-surface-container-high rounded-xl overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
            <div className="flex-1 p-12 flex flex-col justify-center">
              <h2 className="font-headline font-extrabold text-4xl text-primary mb-6">
                See who's driving today.
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-secondary">
                    my_location
                  </span>
                  <div>
                    <p className="font-label text-[10px] font-bold text-outline-variant tracking-widest uppercase">
                      CURRENTLY ACTIVE
                    </p>
                    <p className="font-headline font-bold text-primary">
                      North Campus to Downtown
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-surface-container-lowest/50 p-4 rounded-lg">
                  <span className="material-symbols-outlined text-outline">
                    location_on
                  </span>
                  <div>
                    <p className="font-label text-[10px] font-bold text-outline-variant tracking-widest uppercase">
                      STARTING SOON
                    </p>
                    <p className="font-headline font-bold text-on-surface-variant">
                      Library to Student Housing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative min-h-[300px]">
              <img
                className="w-full h-full object-cover"
                alt="Map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7aLV8Qwma_TKKDYLNmH1Ks49W0AhjTSAw_NwehHKh1Hn7HeZOa58Nsa75wYhIvZQY0cfk1j9qncHrcho500gisR9d8_ssdg4Tr75BjOdp6gn77nsws-g485-27mZHlCqelBVXUb6xWQCv3MBrX6kjPi5-dMuEP5bYj31ZdsC7IZ7ojMSUeMECteAkDrcfYVq5GtMjC8u9IjsWxnnXXTQojH724qHCCx-454XGA6e7ac-NuUjdTRLnRP5bpnM0BmctNmIM_TT1Stxg"
              />
              <div className="absolute inset-0 bg-primary/10 backdrop-none"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation (Mobile Only) */}
    </div>
  );
}
