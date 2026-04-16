import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

export default function AuthPage() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only used for Sign Up

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/feed');
      }
    });
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return alert("Please fill out all required fields.");
    if (isSignUp && !name) return alert("Please provide your name.");

    setLoading(true);
    let authError = null;

    try {
      if (isSignUp) {
        // Sign Up
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name
            }
          }
        });
        authError = error;
        
        if (!error) {
          // Additionally, update the generated profile record with the name
          // The trigger handled creating the row, but we need to update the name.
          // Note: Wait a moment for trigger to complete, or better, auth.users data gets updated eventually.
          // Since it's quick, we can just let them know to verify email.
          alert("Account created! You can now access your dashboard.");
          navigate('/profile');
          return;
        }
      } else {
        // Sign In
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        authError = error;

        if (!error) {
          navigate('/feed');
        }
      }

      if (authError) {
        alert(authError.message);
      }
    } catch (err: any) {
      alert("Unexpected error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side: Brand & Value Prop */}
        <section className="hidden lg:flex relative bg-primary items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-primary-container opacity-90"></div>
          <div
            className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBo24VDZh-ijBNAIrRMIXy8eH1hqT7hpZo2k1Zbjo9M6ww5OXtCB7SgXfZrVXp8uGs05OjAXkXSoZ7LyWCAqF2aba5cAN-adtGqnKodB2Hw2uvANf4Q5vJnfXV8cBjTPiB8wizv05267bgEbmWow1LITcoJNUx4PY1lx60N7phv4-HQJbPzCbxx6uspkxhtQHTNqbuAzGXBYOKVr2gTUgPySDVT9jkNEj5Ax1fp3SJwAnaq4glqZqyRCT4cEmGvS_pseV28HwJsNt1p')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="relative z-10 max-w-lg">
            <div className="mb-12">
              <span className="text-on-primary-container font-headline font-black text-4xl tracking-tighter">
                U&I Ride
              </span>
            </div>
            <h1 className="text-5xl font-headline font-extrabold text-on-primary leading-tight mb-6">
              The Scholarly way to <span className="text-secondary-container">commute.</span>
            </h1>
            <p className="text-xl text-on-primary-container font-body leading-relaxed mb-8">
              Exclusive transportation network for the university community. Verified, safe, and academically oriented.
            </p>
            <div className="flex flex-col gap-4">
              <div className="bg-primary-container/40 backdrop-blur-md p-6 rounded-lg flex items-start gap-4">
                <div className="bg-secondary-container p-2 rounded-full text-on-secondary-container">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-primary">Verified Students Only</h3>
                  <p className="text-sm text-on-primary-container opacity-80">
                    Every rider and driver is authenticated via university credentials.
                  </p>
                </div>
              </div>
              <div className="bg-primary-container/40 backdrop-blur-md p-6 rounded-lg flex items-start gap-4">
                <div className="bg-secondary-container p-2 rounded-full text-on-secondary-container">
                  <span className="material-symbols-outlined">eco</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-primary">Eco-Friendly Campus</h3>
                  <p className="text-sm text-on-primary-container opacity-80">
                    Reduce the campus carbon footprint by sharing rides with peers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Auth Form */}
        <section className="flex items-center justify-center p-6 sm:p-12 md:p-20 bg-surface">
          <div className="w-full max-w-md">
            <div className="mb-12 flex flex-col items-center lg:items-start">
              <div className="lg:hidden mb-6">
                <span className="text-primary font-headline font-black text-3xl tracking-tighter">
                  U&I Ride
                </span>
              </div>
              <h2 className="text-3xl font-headline font-black text-on-surface mb-2">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </h2>
              <p className="text-on-surface-variant">
                {isSignUp ? "Enroll in the collegiate transit network" : "Access your collegiate transit dashboard"}
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-6">
              
              {isSignUp && (
                <div className="space-y-2">
                  <label className="text-[11px] font-label font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Full Name
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                    </div>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full pl-11 pr-4 py-4 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary-fixed focus:bg-primary-fixed text-on-surface placeholder:text-outline/50 transition-all font-body text-sm"
                      placeholder="Jane Doe"
                      type="text"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[11px] font-label font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                  University Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                  </div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-4 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary-fixed focus:bg-primary-fixed text-on-surface placeholder:text-outline/50 transition-all font-body text-sm"
                    placeholder="netid@byu.edu"
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-end px-1">
                  <label className="text-[11px] font-label font-bold uppercase tracking-widest text-on-surface-variant">
                    Password
                  </label>
                  {!isSignUp && (
                    <a className="text-[11px] font-label font-bold text-secondary uppercase tracking-widest hover:underline transition-all" href="#">
                      Forgot?
                    </a>
                  )}
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </div>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-4 py-4 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary-fixed focus:bg-primary-fixed text-on-surface placeholder:text-outline/50 transition-all font-body text-sm"
                    placeholder="••••••••••••"
                    type="password"
                  />
                </div>
              </div>
              <div className="pt-2 flex flex-col gap-3">
                <button
                  disabled={loading}
                  className="w-full bg-primary text-on-primary py-4 px-6 rounded-full font-headline font-bold text-base hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/10 disabled:opacity-50 disabled:active:scale-100"
                  type="submit"
                >
                  {loading ? (
                    <><span className="material-symbols-outlined animate-spin text-[20px]">autorenew</span> Authenticating</>
                  ) : (
                    <>
                      {isSignUp ? "Complete Enrollment" : "Sign In to Dashboard"}
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </>
                  )}
                </button>

                <button 
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="w-full text-primary py-4 px-6 rounded-full font-headline font-bold text-sm hover:bg-surface-container-low transition-colors"
                >
                  {isSignUp ? "Already have an account? Sign In" : "Need to create an account? Sign Up"}
                </button>
              </div>
            </form>

            <div className="mt-12">
              <div className="relative">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-outline-variant/30"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-widest font-label font-bold">
                  <span className="bg-surface px-4 text-outline">Community Verification</span>
                </div>
              </div>

              <div className="mt-8">
                <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10 relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded text-[10px] font-black tracking-tighter uppercase">
                        Student Only
                      </div>
                      <h4 className="text-sm font-headline font-bold text-on-surface">True Blue Campus</h4>
                    </div>
                    <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                      Verification requires an active university email and student identification number. Ensure you have these ready.
                    </p>
                    <Link to="/verify" className="w-full bg-secondary-container text-on-secondary-container py-3 px-6 rounded-full font-headline font-bold text-sm hover:brightness-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                      Learn About Verification
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                    </Link>
                  </div>
                  <div className="absolute -bottom-6 -right-6 text-primary/5 select-none transform group-hover:scale-110 transition-transform duration-500">
                    <span
                      className="material-symbols-outlined text-[120px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      school
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <footer className="mt-12 flex flex-wrap justify-center gap-6 text-[10px] font-label font-bold uppercase tracking-[0.2em] text-outline">
              <a className="hover:text-primary transition-colors" href="#">
                Safety Protocol
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Campus Guidelines
              </a>
            </footer>
          </div>
        </section>
      </main>

      <div className="fixed top-6 right-6 z-50">
        <div className="flex items-center gap-3 bg-surface-container-lowest/80 backdrop-blur-xl px-4 py-2 rounded-full shadow-sm border border-outline-variant/20">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-label font-bold uppercase tracking-wider text-on-surface-variant">
            System Operational
          </span>
        </div>
      </div>
    </div>
  );
}
