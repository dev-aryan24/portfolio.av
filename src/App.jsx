import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <a href="/" className="logo">
          AV<span>.</span>
        </a>

        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Talk
        </a>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">DEVELOPER · AI/ML · UI</p>

            <h1>
              I turn ideas into
              <span> working digital products.</span>
            </h1>

            <p className="hero-description">
              I build web experiences and AI-powered projects with thoughtful
              development, clean interfaces, and practical problem solving.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-btn">
                View My Work
              </a>

              <a href="#contact" className="secondary-btn">
                Let's Talk
              </a>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="hero-visual">
            <div className="hero-glow"></div>

            <div className="profile-card">
              <div className="profile-card-top">
                <span>AVAILABLE TO BUILD</span>
                <span className="status-dot"></span>
              </div>

              <div className="hero-photo">
                <img
                  src="/a2.jpg"
                  alt="Aryan Verma"
                  className="profile-image"
                />
              </div>

              <div className="profile-card-bottom">
                <div>
                  <strong>Aryan Verma</strong>
                  <span>Developer · AI/ML · UI</span>
                </div>

                <span className="profile-arrow">↗</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SELECTED WORK ================= */}
        <section id="work" className="work-section">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>

            <h2>
              Projects that show how I
              <span> build and solve.</span>
            </h2>

            <p>
              A selection of projects across web development, AI/ML, and
              AI-assisted product development.
            </p>
          </div>

          <div className="projects-grid">
            {/* PROJECT 01 — NAARI SHAKTI */}
            <article className="project-card featured naari-card">
              <div className="project-number">01</div>

              <div className="project-visual">
                <img
                  src="/voiceguard.jpeg"
                  alt="Naari Shakti project interface"
                />

                <div className="visual-label">
                  NAARI SHAKTI · PROJECT INTERFACE
                </div>
              </div>

              <div className="project-content">
                <p className="project-type">AI / ML · WOMEN SAFETY</p>

                <h3>Naari Shakti</h3>

                <p>
                  An AI/ML-powered women safety system designed to help
                  activate emergency assistance and automatically notify a
                  registered contact.
                </p>

                <div className="tags">
                  <span>Python</span>
                  <span>Machine Learning</span>
                  <span>Speech Recognition</span>
                  <span>Geolocation</span>
                </div>

                <a href="#naari-case-study" className="project-link">
                  View Case Study <span>→</span>
                </a>
              </div>
            </article>
          </div>

          {/* ================= NAARI SHAKTI CASE STUDY ================= */}
          <section id="naari-case-study" className="case-study-section">
            <div className="case-study-header">
              <p className="eyebrow">CASE STUDY · 01</p>

              <h2>
                Naari Shakti
                <span> — AI-powered women safety system.</span>
              </h2>

              <p className="case-study-intro">
                A project focused on using AI/ML and automated assistance to
                create a practical emergency response experience for women
                safety.
              </p>
            </div>

            {/* OVERVIEW */}
            <div className="case-study-block">
              <div className="case-label">
                <span>01</span>
                <p>OVERVIEW</p>
              </div>

              <div className="case-content">
                <h3>Building technology around an important problem.</h3>

                <p>
                  Naari Shakti was developed as an AI/ML-based women safety
                  system with the goal of reducing the steps required to get
                  emergency assistance during a critical situation.
                </p>

                <p>
                  The system combines user activation, voice-related
                  interaction, location information, and automated emergency
                  communication into a single workflow.
                </p>
              </div>
            </div>

            {/* PROBLEM */}
            <div className="case-study-block">
              <div className="case-label">
                <span>02</span>
                <p>PROBLEM</p>
              </div>

              <div className="case-content">
                <h3>Emergency situations require quick action.</h3>

                <p>
                  During an emergency, manually opening applications, finding
                  a contact, communicating the situation, and sharing location
                  can take valuable time.
                </p>

                <div className="case-highlight">
                  <span>THE CHALLENGE</span>

                  <strong>
                    How can technology simplify the first response during an
                    emergency?
                  </strong>
                </div>
              </div>
            </div>

            {/* SOLUTION */}
            <div className="case-study-block">
              <div className="case-label">
                <span>03</span>
                <p>SOLUTION</p>
              </div>

              <div className="case-content">
                <h3>An automated emergency assistance workflow.</h3>

                <p>
                  Naari Shakti is designed around an automated flow where the
                  user can activate the system and initiate emergency
                  assistance.
                </p>

                <div className="workflow">
                  <div className="workflow-step">
                    <span>01</span>
                    <strong>Activate</strong>
                    <p>User activates the safety system.</p>
                  </div>

                  <div className="workflow-arrow">→</div>

                  <div className="workflow-step">
                    <span>02</span>
                    <strong>Process</strong>
                    <p>The system processes the emergency input.</p>
                  </div>

                  <div className="workflow-arrow">→</div>

                  <div className="workflow-step">
                    <span>03</span>
                    <strong>Locate</strong>
                    <p>Location information is collected.</p>
                  </div>

                  <div className="workflow-arrow">→</div>

                  <div className="workflow-step">
                    <span>04</span>
                    <strong>Alert</strong>
                    <p>
                      Emergency information is sent to the registered contact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SCREENSHOTS */}
            <div className="case-study-block screenshots-block">
              <div className="case-label">
                <span>04</span>
                <p>INTERFACE</p>
              </div>

              <div className="case-content">
                <h3>The interface behind the workflow.</h3>

                <p>
                  These screenshots show the project's emergency monitoring
                  interface and the interaction designed around activating
                  assistance.
                </p>

                <div className="case-images">
                  <figure className="case-image-large">
                    <img
                      src="/voiceguard.jpeg"
                      alt="Naari Shakti main interface"
                    />

                    <figcaption>
                      Main emergency assistance interface
                    </figcaption>
                  </figure>

                  <figure className="case-image-small">
                    <img
                      src="/naari-shakti.png"
                      alt="Naari Shakti emergency system interface"
                    />

                    <figcaption>Emergency system interface</figcaption>
                  </figure>
                </div>
              </div>
            </div>

            {/* ROLE */}
            <div className="case-study-block">
              <div className="case-label">
                <span>05</span>
                <p>MY ROLE</p>
              </div>

              <div className="case-content">
                <h3>From implementation to interface.</h3>

                <p>
                  I worked on the development of the project, combining
                  AI/ML-related functionality with the application's user
                  interface and emergency workflow.
                </p>

                <div className="role-grid">
                  <div>
                    <span>01</span>
                    <strong>Development</strong>
                    <p>Implemented the core application workflow.</p>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>AI / ML</strong>
                    <p>Worked with machine-learning based functionality.</p>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>Interface</strong>
                    <p>Worked on the user-facing interaction.</p>
                  </div>

                  <div>
                    <span>04</span>
                    <strong>Integration</strong>
                    <p>
                      Connected voice, location and emergency alert
                      functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TECHNOLOGY */}
            <div className="case-study-block">
              <div className="case-label">
                <span>06</span>
                <p>TECHNOLOGY</p>
              </div>

              <div className="case-content">
                <h3>Tools used to bring the system together.</h3>

                <div className="technology-list">
                  <span>Python</span>
                  <span>Machine Learning</span>
                  <span>Speech Recognition</span>
                  <span>Tkinter</span>
                  <span>Geocoder</span>
                  <span>Pynput</span>
                  <span>Pygame</span>
                </div>
              </div>
            </div>

            {/* OUTCOME */}
            <div className="case-study-block">
              <div className="case-label">
                <span>07</span>
                <p>OUTCOME</p>
              </div>

              <div className="case-content">
                <h3>
                  A practical prototype built around emergency response.
                </h3>

                <p>
                  The project resulted in a working AI/ML-based women safety
                  system concept with an automated emergency assistance
                  workflow.
                </p>

                <p>
                  The project was also taken forward as a formal intellectual
                  property submission, reinforcing its development beyond a
                  classroom-only concept.
                </p>
              </div>
            </div>

            {/* REFLECTION */}
            <div className="case-study-block case-reflection">
              <div className="case-label">
                <span>08</span>
                <p>REFLECTION</p>
              </div>

              <div className="case-content">
                <h3>What I learned.</h3>

                <p>
                  Building Naari Shakti helped me understand how AI/ML
                  functionality needs to work together with usability and
                  real-world constraints. The project also strengthened my
                  understanding of turning an idea into a working product.
                </p>
              </div>
            </div>

            {/* CASE CTA */}
            <div className="case-study-cta">
              <p className="eyebrow">NEXT PROJECT</p>

              <h3>Explore Ari Movies →</h3>

              <a href="#work" className="secondary-btn">
                Back to Selected Work
              </a>
            </div>
          </section>

          {/* ================= ARI MOVIES CASE STUDY ================= */}
          <section
            className="case-study-section"
            id="ari-movies-case-study"
          >
            <div className="case-study-header">
              <p className="case-label">CASE STUDY · 02</p>

              <h2>Ari Movies — Movie Discovery Platform</h2>

              <p>
                A movie discovery platform that combines OMDb search,
                authentication, and cloud-based favourites into one simple
                experience.
              </p>
            </div>

            <div className="case-study-block">
              <div className="case-label">OVERVIEW</div>

              <div className="case-content">
                <h3>Finding and saving movies in one place.</h3>

                <p>
                  Ari Movies is a React-based movie discovery application built
                  around the OMDb API. Users can search for movies, explore
                  results, log in, and save their favourite movies to their
                  personal collection.
                </p>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">PROBLEM</div>

              <div className="case-content">
                <h3>Movie discovery should feel simple.</h3>

                <p>
                  The goal was to create a focused interface where users could
                  quickly search for a movie without unnecessary complexity,
                  while also providing a personal space for saved favourites.
                </p>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">SOLUTION</div>

              <div className="case-content">
                <h3>Search, discover, authenticate, save.</h3>

                <p>
                  I structured the application around a straightforward user
                  journey: search for a movie, discover relevant results,
                  authenticate when needed, and save favourites to the user's
                  collection.
                </p>

                <div className="case-highlight">
                  <strong>
                    Search → Discover → Login → Save Favorites
                  </strong>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">USER FLOW</div>

              <div className="case-content">
                <div className="workflow">
                  <div>
                    <span>01</span>
                    <strong>Search</strong>
                    <p>Search movies using the OMDb catalogue.</p>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>Discover</strong>
                    <p>Browse movie results through the interface.</p>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>Login</strong>
                    <p>Authenticate to access personal features.</p>
                  </div>

                  <div>
                    <span>04</span>
                    <strong>Favorites</strong>
                    <p>Save and access a personal movie collection.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">INTERFACE</div>

              <div className="case-content">
                <h3>Real application screens.</h3>

                <div className="case-images ari-movies-images">
                  <figure>
                    <img
                      src="/ari-movies-home.png"
                      alt="Ari Movies home and movie search interface"
                    />
                    <figcaption>Movie search</figcaption>
                  </figure>

                  <figure>
                    <img
                      src="/ari-movies-favorites.png"
                      alt="Ari Movies favourites interface"
                    />
                    <figcaption>Favorites</figcaption>
                  </figure>

                  <figure>
                    <img
                      src="/ari-movies-login.png"
                      alt="Ari Movies login interface"
                    />
                    <figcaption>Authentication</figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">MY ROLE</div>

              <div className="case-content">
                <h3>From structure to implementation.</h3>

                <p>
                  I worked across the application's frontend structure,
                  component development, API integration, authentication flow,
                  favourites functionality, and responsive interface.
                </p>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">TECHNOLOGY</div>

              <div className="case-content">
                <div className="technology-list">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Vite</span>
                  <span>OMDb API</span>
                  <span>Firebase</span>
                  <span>Firebase Authentication</span>
                  <span>Realtime Database</span>
                  <span>MVVM</span>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">ARCHITECTURE</div>

              <div className="case-content">
                <h3>MVVM structure.</h3>

                <p>
                  The application follows an MVVM-oriented structure to keep
                  the interface, application logic, and data responsibilities
                  separated. This makes the project easier to understand,
                  maintain, and extend.
                </p>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">INTEGRATIONS</div>

              <div className="case-content">
                <div className="role-grid">
                  <div>
                    <strong>OMDb API</strong>

                    <p>
                      Used to retrieve movie information based on user search
                      queries.
                    </p>
                  </div>

                  <div>
                    <strong>Firebase</strong>

                    <p>
                      Used for authentication and storing users' favourite
                      movies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">CURRENT STATUS</div>

              <div className="case-content">
                <p>
                  The core application experience has been implemented,
                  including movie search, authentication, and favourites
                  functionality. The project continues to be refined through UI
                  improvements, testing, and integration work.
                </p>
              </div>
            </div>

            <div className="case-study-block case-reflection">
              <div className="case-label">REFLECTION</div>

              <div className="case-content">
                <h3>A practical project for learning product structure.</h3>

                <p>
                  Ari Movies helped me work beyond individual UI components and
                  think about the complete flow of a product — from external
                  API data to authentication, persistent user data, and the
                  final interface.
                </p>
              </div>
            </div>

            <div className="case-study-cta">
              <div>
                <p className="case-label">NEXT</p>
                <h3>Explore more of my work.</h3>
              </div>

              <a href="#contact" className="primary-button">
                Let's Talk <span>↗</span>
              </a>
            </div>
          </section>

          {/* ================= FLYRANK AI CASE STUDY ================= */}
          <section className="case-study-section" id="flyrank-case-study">
            <div className="case-study-header">
              <p className="case-label">CASE STUDY · 03</p>

              <h2>FlyRank AI — Prompt Comparison</h2>

              <p>
                An experiment in using better prompts, structured requirements,
                and human verification to turn AI-generated frontend work into
                a more complete product.
              </p>
            </div>

            <div className="case-study-block">
              <div className="case-label">OVERVIEW</div>

              <div className="case-content">
                <h3>Better instructions. Better implementation.</h3>

                <p>
                  The FlyRank AI Prompt Comparison project explores how the
                  quality of an AI prompt affects the resulting frontend
                  implementation. The project compares a vague first-round
                  prompt with a more detailed second-round prompt.
                </p>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">THE EXPERIMENT</div>

              <div className="case-content">
                <div className="role-grid">
                  <div>
                    <strong>Round 1 · Vague</strong>

                    <p>
                      A simple request to create a React settings form. The
                      resulting implementation focused on the basic feature
                      without many additional requirements.
                    </p>
                  </div>

                  <div>
                    <strong>Round 2 · Detailed</strong>

                    <p>
                      A structured prompt with clearer requirements produced a
                      more complete implementation with validation, UX
                      considerations, testing, and additional frontend details.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">PROCESS</div>

              <div className="case-content">
                <div className="workflow">
                  <div>
                    <span>01</span>
                    <strong>Prompt</strong>
                    <p>Start with a specific frontend task.</p>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>Compare</strong>
                    <p>
                      Evaluate the output from different prompt approaches.
                    </p>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>Verify</strong>
                    <p>
                      Test the generated implementation instead of accepting
                      it blindly.
                    </p>
                  </div>

                  <div>
                    <span>04</span>
                    <strong>Improve</strong>
                    <p>
                      Apply human judgment and refine the final result.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">IMPLEMENTATION</div>

              <div className="case-content">
                <h3>
                  From a basic form to a more considered interface.
                </h3>

                <p>
                  The second iteration introduced a more structured React
                  implementation with form handling, schema-based validation,
                  responsive behaviour, accessibility considerations, and
                  testing.
                </p>

                <div className="technology-list">
                  <span>React</span>
                  <span>Vite</span>
                  <span>React Hook Form</span>
                  <span>Zod</span>
                  <span>Vitest</span>
                  <span>React Testing Library</span>
                  <span>CSS</span>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">AI + HUMAN JUDGMENT</div>

              <div className="case-content">
                <h3>AI generated the work. Judgment shaped the result.</h3>

                <p>
                  The main learning was that prompting is only one part of
                  AI-assisted development. The generated output still needs to
                  be reviewed, tested, questioned, and improved by a developer.
                </p>

                <div className="case-highlight">
                  <strong>
                    Prompt → Generate → Review → Test → Improve
                  </strong>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">REPOSITORY</div>

              <div className="case-content">
                <h3>Explore the actual implementation.</h3>

                <p>
                  The project includes separate branches for the vague and
                  detailed prompt approaches, making the progression easier to
                  inspect.
                </p>

                <a
                  href="https://github.com/dev-aryan24/ai-prompt-comparison"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View GitHub Repository <span>↗</span>
                </a>
              </div>
            </div>

            <div className="case-study-block case-reflection">
              <div className="case-label">REFLECTION</div>

              <div className="case-content">
                <h3>AI fluency is more than writing prompts.</h3>

                <p>
                  This project changed how I approach AI-assisted development.
                  A useful result comes from combining clear instructions with
                  technical understanding, verification, and human judgment.
                </p>
              </div>
            </div>

            <div className="case-study-cta">
              <div>
                <p className="case-label">NEXT</p>
                <h3>See the project currently in progress.</h3>
              </div>

              <a href="#contact" className="primary-button">
                Let's Talk <span>↗</span>
              </a>
            </div>
          </section>

          {/* ================= BHASHAKAVACH CASE STUDY ================= */}
          <section
            className="case-study-section"
            id="bhashakavach-case-study"
          >
            <div className="case-study-header">
              <p className="case-label">CASE STUDY · 04 · IN PROGRESS</p>

              <h2>BhashaKavach — Multilingual Voice Deepfake Detection</h2>

              <p>
                An AI/ML research project exploring real-time voice deepfake
                detection for Indic and Hinglish speech, with a focus on
                practical digital safety.
              </p>
            </div>

            <div className="case-study-block">
              <div className="case-label">OVERVIEW</div>

              <div className="case-content">
                <h3>Detecting manipulated voices across Indian languages.</h3>

                <p>
                  BhashaKavach is an ongoing AI/ML project focused on detecting
                  synthetic and manipulated voices in multilingual speech. The
                  project explores how voice deepfake detection can be adapted
                  for Indic languages and Hinglish, where code-mixed speech
                  creates additional challenges.
                </p>

                <div className="case-highlight">
                  <strong>STATUS · RESEARCH + DEVELOPMENT IN PROGRESS</strong>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">PROBLEM</div>

              <div className="case-content">
                <h3>Voice deepfakes are becoming harder to distinguish.</h3>

                <p>
                  AI-generated speech can increasingly resemble natural human
                  voices. A detection system needs to consider more than a
                  single language or controlled recording environment,
                  especially when working with multilingual and code-mixed
                  speech.
                </p>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">PROPOSED SOLUTION</div>

              <div className="case-content">
                <h3>A lightweight multilingual detection pipeline.</h3>

                <p>
                  The planned system will analyse voice characteristics,
                  extract useful audio features, and use an AI/ML model to
                  distinguish between authentic and manipulated speech.
                </p>

                <div className="workflow">
                  <div>
                    <span>01</span>
                    <strong>Voice Input</strong>
                    <p>Capture or provide a speech sample.</p>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>Preprocess</strong>
                    <p>Prepare the audio for feature extraction.</p>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>Feature Extraction</strong>
                    <p>
                      Analyse relevant characteristics of the voice signal.
                    </p>
                  </div>

                  <div>
                    <span>04</span>
                    <strong>Detection</strong>
                    <p>
                      Classify the sample as real or potentially manipulated.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">RESEARCH FOCUS</div>

              <div className="case-content">
                <div className="role-grid">
                  <div>
                    <strong>Indic Languages</strong>
                    <p>
                      Exploring voice detection across Indian-language speech
                      instead of relying only on English datasets.
                    </p>
                  </div>

                  <div>
                    <strong>Hinglish</strong>
                    <p>
                      Studying code-mixed speech where speakers naturally
                      switch between Hindi and English.
                    </p>
                  </div>

                  <div>
                    <strong>Real-Time Detection</strong>
                    <p>
                      Exploring a lightweight architecture suitable for
                      practical real-time monitoring.
                    </p>
                  </div>

                  <div>
                    <strong>Digital Safety</strong>
                    <p>
                      Investigating potential applications in communication
                      security and social wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">PLANNED OUTPUT</div>

              <div className="case-content">
                <h3>Make the model's result understandable.</h3>

                <p>
                  The planned interface will present the detection result in a
                  simple form, including a real/fake classification and
                  confidence-style output where supported by the final model.
                </p>

                <div className="technology-list">
                  <span>Python</span>
                  <span>Machine Learning</span>
                  <span>Audio Processing</span>
                  <span>Feature Extraction</span>
                  <span>Indic Speech</span>
                  <span>Hinglish</span>
                </div>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">CURRENT STATUS</div>

              <div className="case-content">
                <h3>Research and model development are ongoing.</h3>

                <p>
                  The project is currently being developed as an AI/ML research
                  initiative. Dataset planning, multilingual coverage, feature
                  extraction, model experimentation, and real-time
                  implementation are part of the ongoing work.
                </p>

                <p>
                  No final accuracy or performance figures are presented here
                  until they are measured and validated on the completed
                  system.
                </p>
              </div>
            </div>

            <div className="case-study-block">
              <div className="case-label">NEXT MILESTONES</div>

              <div className="case-content">
                <div className="workflow">
                  <div>
                    <span>01</span>
                    <strong>Dataset</strong>
                    <p>
                      Build and organise representative multilingual voice
                      data.
                    </p>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>Model</strong>
                    <p>
                      Experiment with suitable ML approaches for detection.
                    </p>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>Evaluation</strong>
                    <p>
                      Measure performance using appropriate validation methods.
                    </p>
                  </div>

                  <div>
                    <span>04</span>
                    <strong>Deployment</strong>
                    <p>
                      Explore a practical real-time detection interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-block case-reflection">
              <div className="case-label">REFLECTION</div>

              <div className="case-content">
                <h3>Building for the language people actually use.</h3>

                <p>
                  The project is an opportunity to explore how AI/ML systems
                  can be designed around India's multilingual environment
                  rather than treating English as the only default. The focus
                  is on developing something technically useful while keeping
                  the eventual application practical.
                </p>
              </div>
            </div>

            <div className="case-study-cta">
              <div>
                <p className="case-label">CURRENTLY BUILDING</p>
                <h3>More experiments are on the way.</h3>
              </div>

              <a href="#contact" className="primary-button">
                Let's Talk <span>↗</span>
              </a>
            </div>
          </section>
        </section>

        {/* ================= HOW I WORK ================= */}
        <section className="process-section">
          <div className="section-heading">
            <p className="eyebrow">HOW I WORK</p>

            <h2>
              From idea to
              <span> working product.</span>
            </h2>
          </div>

          <div className="process-grid">
            <div className="process-item">
              <span>01</span>

              <h3>Understand</h3>

              <p>Start with the problem, users, and purpose.</p>
            </div>

            <div className="process-item">
              <span>02</span>

              <h3>Explore</h3>

              <p>
                Research ideas, technologies, and possible approaches.
              </p>
            </div>

            <div className="process-item">
              <span>03</span>

              <h3>Build</h3>

              <p>
                Turn the chosen direction into a working experience.
              </p>
            </div>

            <div className="process-item">
              <span>04</span>

              <h3>Improve</h3>

              <p>Test, refine, and improve what doesn't work.</p>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
       <section className="about-section" id="about">
  <div className="section-heading">
    <p className="eyebrow">ABOUT</p>
    <h2>
      Building with purpose,
      <span> learning by doing.</span>
    </h2>
  </div>

  <div className="about-grid">
    <div className="about-main">
      <div className="about-intro">
        <span className="about-number">01</span>
        <p>
          I’m a recently graduated BCA student focused on web development,
          UI/UX design, and applied AI/ML.
        </p>
      </div>

      <p>
        I enjoy turning ideas into practical digital products — from
        responsive interfaces and full-stack applications to AI/ML
        experiments that solve real problems.
      </p>

      <p>
        My approach is simple: understand the problem, build thoughtfully,
        test what I create, and keep improving.
      </p>

      <div className="about-tags">
        <span>Web Experiences</span>
        <span>AI / ML Projects</span>
        <span>Clean Interfaces</span>
        <span>Problem Solving</span>
      </div>
    </div>

    <div className="about-side">
      <div className="about-item">
        <div className="about-item-top">
          <span>FOCUS</span>
          <span className="about-arrow">↗</span>
        </div>
        <strong>Web Development · AI/ML · UI/UX</strong>
      </div>

      <div className="about-item">
        <div className="about-item-top">
          <span>TECHNOLOGIES</span>
          <span className="about-arrow">↗</span>
        </div>
        <strong>
          React · JavaScript · Python · TypeScript · Firebase · Git
        </strong>
      </div>

      <div className="about-item">
        <div className="about-item-top">
          <span>EDUCATION</span>
          <span className="about-arrow">↗</span>
        </div>
        <strong>BCA · Amity University Lucknow</strong>
      </div>

      <div className="about-item">
        <div className="about-item-top">
          <span>CURRENTLY</span>
          <span className="about-arrow">↗</span>
        </div>
        <strong>Building projects & growing as a developer</strong>
      </div>
    </div>
  </div>
</section>

        {/* ================= FINAL CTA ================= */}
<section id="contact" className="final-cta">
  <div className="cta-content">
    <p className="eyebrow">HAVE AN IDEA?</p>

    <h2>
      Let's build something
      <span> useful.</span>
    </h2>

    <p>
      Have a project, opportunity, or idea you'd like to discuss?
      <br />
      I’d be happy to hear about it.
    </p>

    <a
      href="mailto:aryanstudent2005@gmail.com"
      className="primary-btn"
    >
      Let's Talk <span>↗</span>
    </a>
  </div>
</section>
      </main>

      {/* ================= FOOTER ================= */}
<footer>
  <div className="footer-left">
    <p>© 2026 Aryan Verma</p>
    <span>Built with curiosity & code.</span>
  </div>

  <div className="footer-links">
    <a href="mailto:aryanstudent2005@gmail.com">
      Email
    </a>

    <a
      href="https://github.com/dev-aryan24"
      target="_blank"
      rel="noreferrer"
    >
      GitHub ↗
    </a>

    <a
      href="https://www.linkedin.com/in/aryan-verma-034107250/"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn ↗
    </a>
  </div>
</footer>
    </div>
  );
}

export default App;