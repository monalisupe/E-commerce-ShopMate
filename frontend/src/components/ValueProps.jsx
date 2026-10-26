function ValueProps() {
  const props = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#68753D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: "Free Express Shipping",
      desc: "On all orders above ₹499",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#68753D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "100% Authentic Quality",
      desc: "Verified premium products",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#68753D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "7-Day Easy Returns",
      desc: "Instant replacement or refund",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#68753D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 Priority Support",
      desc: "Instant live assistance",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
        {props.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 p-2">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 border border-brand-200">
              {item.icon}
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                {item.title}
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-500 truncate">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValueProps;
