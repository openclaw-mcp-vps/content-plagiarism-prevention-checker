export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Content Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Check if your content was{" "}
          <span className="text-[#58a6ff]">stolen</span> before publishing
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          PlagiarismGuard scans the web and compares your draft against billions of indexed pages — giving you a confidence score before you hit publish.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card trials. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Web-wide scan", "Similarity score", "Source links", "Instant results", "API access"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited content scans",
              "Full similarity report with sources",
              "Confidence score (0–100%)",
              "Priority scan queue",
              "API access included",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does PlagiarismGuard detect plagiarism?",
              a: "We submit your content to web search APIs and scrape top results, then run text-similarity algorithms (cosine similarity + n-gram matching) to produce a confidence score showing how unique your content is.",
            },
            {
              q: "What does the confidence score mean?",
              a: "A score of 100% means no matching content was found online. Lower scores indicate portions of your text appear elsewhere — we highlight the exact sentences and link to the source pages.",
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. You can cancel at any time from your billing portal. You'll retain access until the end of your billing period with no questions asked.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} PlagiarismGuard. All rights reserved.
      </footer>
    </main>
  );
}
