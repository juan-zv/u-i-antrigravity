import { Link } from 'react-router-dom';

export default function VerificationPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col items-center justify-center p-6 sm:p-12 selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Decorative Background Blur */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary-fixed-dim/30 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-secondary-fixed/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-[0_8px_40px_rgba(26,28,30,0.04)] p-8 md:p-16 text-center">
        {/* Shield Icon */}
        <div className="mx-auto w-24 h-24 rounded-full bg-primary-container/5 flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 rounded-full border-2 border-primary-container/10 animate-ping"></div>
          <span
            className="material-symbols-outlined text-5xl text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            local_police
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-4 tracking-tight">
          True Blue Campus
        </h1>
        <p className="text-on-surface-variant font-body text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          U&I Ride is a closed, secure network. To ensure the safety of our academic community, 
          all users must be actively enrolled students or faculty.
        </p>

        {/* Verification Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          {/* Step 1 */}
          <div className="bg-surface-container-low p-6 rounded-xl flex items-start gap-4">
            <div className="bg-secondary-container text-on-secondary-container w-8 h-8 rounded-full flex items-center justify-center font-bold font-headline shrink-0">
              1
            </div>
            <div>
              <h3 className="font-headline font-bold text-on-surface mb-1">Academic Email</h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Provide your active .edu email address. We will send a secure entry code.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-surface-container-low p-6 rounded-xl flex items-start gap-4">
            <div className="bg-tertiary-container text-on-tertiary-container w-8 h-8 rounded-full flex items-center justify-center font-bold font-headline shrink-0">
              2
            </div>
            <div>
              <h3 className="font-headline font-bold text-on-surface mb-1">Student ID</h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Link your Student ID number to automatically verify your enrollment status.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col items-center gap-6">
          <Link
            to="/auth"
            className="w-full md:w-auto bg-primary text-on-primary py-4 px-12 rounded-full font-headline font-bold text-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/10"
          >
            Link Academic Credentials
            <span className="material-symbols-outlined">badge</span>
          </Link>
          
          <Link
            to="/"
            className="font-label text-xs font-bold uppercase tracking-widest text-outline hover:text-primary transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>

      <footer className="relative z-10 mt-12 flex items-center gap-2 text-[10px] font-label font-bold uppercase tracking-[0.2em] text-outline">
        <span className="material-symbols-outlined text-[14px]">lock</span>
        End-to-End Encrypted Verification
      </footer>
    </div>
  );
}
