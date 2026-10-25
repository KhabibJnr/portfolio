import React, { useState, useEffect } from 'react';

// ============================================================================
// BRIAN MBUTHI - DUAL-CAPABILITY PORTFOLIO COMPONENT (2026 EDITION)
// Stack: React, Tailwind CSS, Lucide Icons / Heroicons concept
// Design Architecture: Bimodal "Math & Quantitative" + "Creative Writing" Split
// ============================================================================

export default function BrianMbuthiPortfolio() {
  // Global State
  const [activeTrack, setActiveTrack] = useState<'split' | 'math' | 'creative'>('split');
  const [language, setLanguage] = useState<'en' | 'sw'>('en');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [showExplication, setShowExplication] = useState<boolean>(false);
  const [selectedManuscript, setSelectedManuscript] = useState<string | null>(null);
  const [activeMathTab, setActiveMathTab] = useState<'spss' | 'regression' | 'publications'>('spss');

  // Interactive Counter Effect State
  const [pubCount, setPubCount] = useState(0);
  const [projCount, setProjCount] = useState(0);

  useEffect(() => {
    let pubTimer: NodeJS.Timeout;
    let projTimer: NodeJS.Timeout;
    
    if (pubCount < 50) {
      pubTimer = setTimeout(() => setPubCount((prev) => Math.min(prev + 2, 50)), 30);
    }
    if (projCount < 500) {
      projTimer = setTimeout(() => setProjCount((prev) => Math.min(prev + 20, 500)), 20);
    }

    return () => {
      clearTimeout(pubTimer);
      clearTimeout(projTimer);
    };
  }, [pubCount, projCount]);

  // Content Data
  const bioContent = {
    en: {
      tagline: "Academic Writer & Quantitative Researcher",
      subtagline: "Bridging Analytical Mathematics (BSc) with High-Caliber Literary & Creative Craft",
      mathHeading: "Quantitative Modeling & Empirical Research",
      mathDesc: "50+ indexed publications & 500+ assignments across SPSS, SAS, Excel financial modeling, and predictive statistical frameworks.",
      creativeHeading: "Creative Writing, Poetry & Editorial Craft",
      creativeDesc: "Published fiction, persona poetry, and critical essays exploring memory, loss, and narrative subtext.",
      welcomeMsg: "Welcome to my dual-capability portfolio platform."
    },
    sw: {
      tagline: "Mwandishi wa Kiakademia na Mtafiti wa Takwimu",
      subtagline: "Kuunganisha Hisabati ya Uchanganuzi (BSc) na Sanaa ya Uandishi wa Ubunifu",
      mathHeading: "Uundo wa Takwimu na Utafiti wa Kisayansi",
      mathDesc: "Zaidi ya machapisho 50 yaliyosajiliwa na miradi 500+ ya uchanganuzi wa SPSS, SAS, na mifano ya kifedha.",
      creativeHeading: "Uandishi wa Ubunifu, Mashairi na Uhariri",
      creativeDesc: "Riwaya fupi, mashairi ya nafsi, na insha za uhakiki zinazochunguza kumbukumbu na maana za ndani.",
      welcomeMsg: "Karibu kwenye ukurasa wangu wa utafiti na sanaa ya uandishi."
    }
  };

  const manuscripts = [
    {
      id: 'river-keeps',
      title: 'What the River Keeps',
      genre: 'Short Story / Fiction',
      summary: 'A gripping narrative following Nell Abara, a ferrywoman grieving her father while facing the construction of a modern bridge by engineer Teodor Vance.',
      excerpt: 'At the break of dawn before the sun even cleared the ridge, Nell Abara would head to the water and grab hold of that rope. It had been twenty-two years since her father first tied that knot...',
      craftNote: 'Utilizes a weathered hemp ferry rope as a central psychological motif for grieving and releasing the past.'
    },
    {
      id: 'riddle-poem',
      title: 'I Am Dark Water Breathed from a Bitter Bean',
      genre: 'Revised Riddle Poem',
      summary: 'A sensory persona poem capturing the domestic ritual and metaphorical alchemy of morning coffee.',
      excerpt: 'I am dark water breathed from a bitter bean, / Children of fire, crushed to powder and re-born in heat. / Steam rises off me like smoke, / a genie loosed each morning from her jar...',
      craftNote: 'Employs tight sensory constraints and vivid metaphor without stating the subject directly.'
    },
    {
      id: 'eleanor-voss',
      title: 'Eleanor Voss',
      genre: 'Persona Poem',
      summary: 'A thirty-year lighthouse keeper reflects on quiet duty, isolation, and safe passages provided to strangers.',
      excerpt: 'I have kept this light for thirty years, / Prior to the motors turning the lens, I turned the lens by hand, / Looked at the ships pass through the rocks like threads...',
      craftNote: 'Explores voice, rhythm, and the emotional resonance of anonymous service.'
    },
    {
      id: 'retouch-essay',
      title: 'Retouch: Public Testimony Analysis',
      genre: 'Critical Reading Essay',
      summary: 'A craft analysis of Mamie Till Bradley’s refusal to retouch Emmett Till’s casket, transforming grief into public evidence.',
      excerpt: 'A closed lid is a kind of sentence. It says this is finished. It says you will take our word for it. Mamie Till Bradley did not take their word...',
      craftNote: 'Examines unretouched physical honesty as an imperative craft element in creative nonfiction.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${
      activeTrack === 'math' 
        ? 'bg-slate-950 text-slate-100' 
        : activeTrack === 'creative' 
        ? 'bg-stone-50 text-stone-900 font-serif' 
        : 'bg-slate-900 text-slate-100'
    }`}>

      {/* GLOBAL HEADER & NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-slate-800/80 px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <span className="text-amber-500">BRIAN MBUTHI</span>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
              BSc Analytical Mathematics
            </span>
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            {bioContent[language].tagline} | Kenya
          </p>
        </div>

        {/* CONTROLS: TRACK TOGGLE + LANGUAGE */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Track Selector Buttons */}
          <div className="bg-slate-800/80 p-1 rounded-lg border border-slate-700 flex text-xs font-mono">
            <button
              onClick={() => setActiveTrack('split')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeTrack === 'split' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              Split View
            </button>
            <button
              onClick={() => setActiveTrack('math')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeTrack === 'math' ? 'bg-blue-600 text-white font-bold shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              ∑ Math & Data
            </button>
            <button
              onClick={() => setActiveTrack('creative')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeTrack === 'creative' ? 'bg-amber-700 text-white font-bold shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              ✍︎ Creative & Literature
            </button>
          </div>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
            className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-mono flex items-center gap-1.5 transition-colors"
            title="Toggle Language / Badilisha Lugha"
          >
            <span className="text-base">{language === 'en' ? '🇰🇪' : '🇬🇧'}</span>
            <span>{language === 'en' ? 'KISWAHILI' : 'ENGLISH'}</span>
          </button>

          {/* Contact CTA */}
          <a
            href="mailto:mbuthibrian2@gmail.com"
            className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-mono transition-transform hover:scale-105 shadow"
          >
            Hire / Contact
          </a>
        </div>
      </header>

      {/* DYNAMIC IMPACT METRICS BANNER */}
      <section className="bg-slate-950/80 border-b border-slate-800 py-6 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl font-extrabold text-amber-400">{pubCount}+</div>
            <div className="text-xs text-slate-400 mt-1">Indexed Publications</div>
            <div className="text-[10px] text-slate-500">Academia.edu & Research</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl font-extrabold text-blue-400">{projCount}+</div>
            <div className="text-xs text-slate-400 mt-1">Academic & Tech Projects</div>
            <div className="text-[10px] text-slate-500">SPSS, SAS & Finance</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl font-extrabold text-emerald-400">4</div>
            <div className="text-xs text-slate-400 mt-1">Languages Spoken</div>
            <div className="text-[10px] text-slate-500">EN, Swahili (Native), DE, FR</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl font-extrabold text-purple-400">BSc</div>
            <div className="text-xs text-slate-400 mt-1">Analytical Mathematics</div>
            <div className="text-[10px] text-slate-500">Chuka Univ + UoN Finance</div>
          </div>
        </div>
      </section>

      {/* MAIN HERO: BIMODAL SPLIT LANDING */}
      {(activeTrack === 'split' || activeTrack === 'math') && (
        <section className={`p-8 ${activeTrack === 'split' ? 'md:grid md:grid-cols-2 gap-8 border-b border-slate-800' : ''}`}>
          
          {/* LEFT PANEL: QUANTITATIVE TRACK */}
          <div className="space-y-6 bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-400 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                Track 01 // Quantitative Mathematics
              </span>
              <span className="text-xs text-slate-500 font-mono">SPSS • SAS • Financial Logic</span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white font-mono">
              {bioContent[language].mathHeading}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {bioContent[language].mathDesc}
            </p>

            {/* Interactive Math & Code Showcase Tabs */}
            <div className="pt-2">
              <div className="flex gap-2 border-b border-slate-800 pb-2 mb-4 text-xs font-mono">
                <button
                  onClick={() => setActiveMathTab('spss')}
                  className={`pb-1 border-b-2 transition-colors ${activeMathTab === 'spss' ? 'border-blue-400 text-blue-400 font-bold' : 'border-transparent text-slate-400'}`}
                >
                  SPSS / SAS Syntax
                </button>
                <button
                  onClick={() => setActiveMathTab('regression')}
                  className={`pb-1 border-b-2 transition-colors ${activeMathTab === 'regression' ? 'border-blue-400 text-blue-400 font-bold' : 'border-transparent text-slate-400'}`}
                >
                  LaTeX Predictive Model
                </button>
                <button
                  onClick={() => setActiveMathTab('publications')}
                  className={`pb-1 border-b-2 transition-colors ${activeMathTab === 'publications' ? 'border-blue-400 text-blue-400 font-bold' : 'border-transparent text-slate-400'}`}
                >
                  Research Credentials
                </button>
              </div>

              {activeMathTab === 'spss' && (
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto">
                  <div className="text-slate-500 text-[10px] mb-2">// Sample SPSS Syntax: Multivariate General Linear Model</div>
                  <code>{`* GLM Analysis for Financial Asset Volatility.
GLM Yield BY Risk_Category WITH Market_Index
  /METHOD=SSTYPE(3)
  /INTERCEPT=INCLUDE
  /PRINT=DESCRIPTIVE ETASQ HOMOGENEITY
  /DESIGN=Market_Index Risk_Category.`}</code>
                </div>
              )}

              {activeMathTab === 'regression' && (
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-amber-300 overflow-x-auto">
                  <div className="text-slate-500 text-[10px] mb-2">// Empirical Formulation (Multiple Linear Regression)</div>
                  <div className="py-2 text-sm text-slate-200">
                    Ŷᵢ = β₀ + ∑ₖ₌₁ᵖ βₖXᵢₖ + ∑ⱼ₌₁ brew𝑞 γⱼZᵢⱼ + ϵᵢ
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Where ϵᵢ ~ N(0, σ²) represents independent Gaussian residual variance in time-series portfolio return estimations.
                  </div>
                </div>
              )}

              {activeMathTab === 'publications' && (
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                    <span className="text-blue-400 font-bold">50+ Indexed Works:</span> Mathematics, Financial Econometrics, and Literature Syntheses on Academia.edu.
                  </div>
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                    <span className="text-amber-400 font-bold">Academic Formats:</span> Mastered APA 7th, MLA, Chicago, IEEE citation standards.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANEL: CREATIVE WRITING TRACK */}
          {activeTrack === 'split' && (
            <div className="space-y-6 bg-stone-900/50 p-6 rounded-2xl border border-stone-800/80 mt-6 md:mt-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  Track 02 // Creative Writing & Literature
                </span>
                <span className="text-xs text-stone-400 font-mono">Fiction • Poetry • Explication</span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-amber-100 font-serif">
                {bioContent[language].creativeHeading}
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed font-sans">
                {bioContent[language].creativeDesc}
              </p>

              <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-3 font-serif">
                <div className="text-xs font-mono text-amber-400">Featured Excerpt — "What the River Keeps"</div>
                <blockquote className="text-xs text-stone-300 italic border-l-2 border-amber-500 pl-3 py-1">
                  "At the break of dawn before the sun even cleared the ridge, Nell Abara would head to the water and grab hold of that rope. It had been twenty-two years since her father first tied that knot..."
                </blockquote>
                <div className="text-[11px] font-sans text-stone-400 flex items-center justify-between pt-1 border-t border-stone-800">
                  <span>Theme: Grief, Memory & Modernity</span>
                  <button 
                    onClick={() => setSelectedManuscript('river-keeps')}
                    className="text-amber-400 hover:underline font-mono text-xs"
                  >
                    Read Full Synopsis →
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* CREATIVE FOCUS FULL SECTION */}
      {activeTrack === 'creative' && (
        <section className="p-8 max-w-5xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-amber-500 uppercase tracking-widest">Literary Portfolio</span>
            <h2 className="text-3xl font-bold font-serif text-stone-100">Keeper of the Light: Selected Manuscripts</h2>
            <p className="text-sm text-stone-400 max-w-xl mx-auto font-sans">
              A complete assembly across short fiction, persona poetry, riddle verse, and critical craft essays.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {manuscripts.map((item) => (
              <div key={item.id} className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-4 hover:border-amber-500/40 transition-all">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-500/10">
                    {item.genre}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-amber-100 font-serif">{item.title}</h3>
                <p className="text-xs text-stone-300 font-sans leading-relaxed">{item.summary}</p>
                <div className="p-3 bg-stone-950 rounded-lg text-xs italic text-stone-400 border-l-2 border-amber-600">
                  "{item.excerpt}"
                </div>
                <div className="text-[11px] font-mono text-stone-500">
                  <strong className="text-amber-400 font-normal">Craft Note:</strong> {item.craftNote}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* INTERACTIVE REVISION SLIDER SECTION (DIFF COMPONENT) */}
      <section className="p-8 border-t border-slate-800 bg-slate-950/90">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Craft & Process Transparency</span>
            <h2 className="text-2xl font-bold font-serif text-white">Interactive Text Revision Slider</h2>
            <p className="text-xs text-slate-400 font-mono">
              Compare early draft excerpts against the final published text for <em className="text-amber-300">"What the River Keeps"</em>
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl p-6">
            
            {/* Visual Header Labels */}
            <div className="grid grid-cols-2 text-center text-xs font-mono mb-4 pb-2 border-b border-slate-800">
              <div className="text-red-400 font-bold">← Early Draft Excerpt (30% Width)</div>
              <div className="text-emerald-400 font-bold">Final Published Revision ({sliderPosition}%) →</div>
            </div>

            {/* Side by Side Text Pane */}
            <div className="relative min-h-[160px] text-sm leading-relaxed p-4 bg-slate-950 rounded-xl border border-slate-800 font-serif">
              {/* Draft Text Layer */}
              <div className="text-slate-400 space-y-2">
                <p className="line-through decoration-red-500/50">
                  "Nell pulled the rope every morning. Her father tied it 22 years ago before he drowned. The town wanted a new bridge, and engineer Teodor Vance came to measure the river stakes."
                </p>
              </div>

              {/* Final Text Layer overlayed with clip-path or width */}
              <div 
                className="absolute inset-0 p-4 bg-slate-900/95 text-stone-200 space-y-2 border-l-2 border-amber-500 overflow-hidden transition-all"
                style={{ width: `${sliderPosition}%` }}
              >
                <p className="font-serif">
                  "At the break of dawn, Nell Abara held the gray hemp rope—weathered and slick with river mist. The rope made a sound like a cello string tuned too tight. Examining frays in the dark as her father taught her, she felt for frays the way a doctor feels for a pulse."
                </p>
              </div>
            </div>

            {/* Slider Control Input */}
            <div className="mt-6 space-y-2">
              <input
                type="range"
                min="10"
                max="90"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>Drag to compare revision iterations</span>
                <span>Slider Position: {sliderPosition}%</span>
              </div>
            </div>

            {/* Toggle Explication Drawer */}
            <div className="mt-4 pt-4 border-t border-slate-800 text-center">
              <button
                onClick={() => setShowExplication(!showExplication)}
                className="text-xs font-mono text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                {showExplication ? "Hide Explication Analysis ▲" : "View Critical Explication Analysis ▼"}
              </button>
            </div>

            {/* Expandable Explication Drawer */}
            {showExplication && (
              <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-amber-500/30 text-xs text-slate-300 space-y-2 font-mono leading-relaxed">
                <h4 className="font-bold text-amber-400">Explication of Revisions:</h4>
                <p>
                  <strong>1. Motif Elevation:</strong> The gray hemp ferry rope was elevated from a functional prop into a psychological motif representing Nell's paralyzing grip on her father's memory.
                </p>
                <p>
                  <strong>2. Acoustic & Tactile Imagery:</strong> Added sensory depth—comparing the strained rope to a cello string and checking frays to feeling a pulse.
                </p>
                <p>
                  <strong>3. Parallel Trauma:</strong> Expanded Vance's backstory, revealing his brother drowned on a cable ferry—creating a mirror motif between tradition and engineering.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT CREDENTIALS */}
      <footer className="bg-slate-950 border-t border-slate-800 px-6 py-12 text-center text-xs font-mono text-slate-400 space-y-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-left border-b border-slate-800 pb-8">
          <div>
            <h4 className="text-white font-bold mb-2">Brian Mbuthi</h4>
            <p className="text-slate-400 leading-relaxed">
              BSc Analytical Mathematics (Chuka Univ) & Business Administration / Finance (Univ of Nairobi).
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">Contact & Location</h4>
            <p>Email: <a href="mailto:mbuthibrian2@gmail.com" className="text-amber-400 hover:underline">mbuthibrian2@gmail.com</a></p>
            <p>Phone: +254-791-372-851</p>
            <p>Location: Kenya</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">Languages & Portfolio</h4>
            <p>English (Fluent) • Kiswahili (Native)</p>
            <p>German (Goethe-Institut) • French (DELF/DALF)</p>
            <p className="mt-1">GitHub: <a href="https://khabibjnr.github.io/" className="text-amber-400 hover:underline" target="_blank" rel="noreferrer">khabibjnr.github.io</a></p>
          </div>
        </div>

        <div className="pt-2 text-slate-500">
          © {new Date().getFullYear()} Brian Mbuthi. Designed with Astro / React & Tailwind CSS. Dual-Track Bimodal Architecture.
        </div>
      </footer>

    </div>
  );
}
