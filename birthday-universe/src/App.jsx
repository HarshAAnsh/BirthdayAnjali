
import { useRef, useState } from "react";
import "./App.css";

const memories = [
  {
    title: "Our little moments",
    caption: "This was the moment when I was dying to get close to you and somehow I couldn't yet I got the courage made this moment.",
    image: "/Photos/Memory-1.jpg",
  },
  {
    title: "First Meeting As A Couple",
    caption: "I will never forget the moment we first met I was ridiculously nervous to see you but when I saw you, I knew I had WON the Battle of Life.",
    image: "/Photos/Memory-2.jpg",
  },
  {
    title: "Our First Kiss",
    caption: "Well to be Honest I wasn't expecting it to happen but it did and I could not have expected more from you , I loved it, I really really did.",
    image: "/Photos/Memory-3.jpg",
  },
  {
    title: "Ganga Ghat",
    caption: "You know this , but If I say this one was in my bucket list. Thank you for this and everything like loving me and being with me.",
    image: "/Photos/Memory-4.jpg",
  },
  {
    title: "My Peace, My Everything",
    caption: "I want you messy , troubled , Angry and all the other ways you exist.",
    image: "/Photos/Memory-5.jpg",
  },
  {
    title: "My Future, My Forever",
    caption: "If only you were here with me, you would know How much I need you right now ,I would never let you go.",
    image: "/Photos/Memory-6.jpg",
  },
  {
    title: "My love, My Life , My Wife",
    caption: "Loving you is not enough now I want to spend my life with you , Marry You.",
    image: "/Photos/Memory-7.jpg",
  },
  {
    title: "My Reason to Success and Happiness",
    caption: "You see this face! yes, this is the reason I keep going, the reason I smile, the reason I am happy, the reason I want to be successful, the reason I want to be a better person, the reason I want to be a better man, the reason I want to be a better boyfriend, the reason I want to be a better husband,  the reason I want to be a better human being.",
    image: "/Photos/Memory-8.jpg",
  },
];

const letters = [
  {
    title: "Open when you miss me",
    message:["लिखूं क्या जो तुमको बताए, लिखे में तुम्हारा रूप समाए।    जो लगे कि मैं भी प्रेमी हूं, ना लगे लगे कि मैं बस प्रेमी हूं।    क्या लिख दूं मैं कोई पुष्प तुम्हें,   या शिशिर में खिलती धूप लिखूँ।    पर पुष्प ना तुमसा कोमल देखा,   ना किरणों में वो तेज़ दिखें।। वर्षा की बूंदे भी देखीं,   और वसंत की सुन्दरता भी।    पर वर्षा ना शीतल उतना , वसंत भी मुझे अब मटमैला लगे।।    यूं तो लिख दूं सागर तुमको ।   पर जो डूबा इन नयनों में, अब सागर भी न गहरा लगे।।        चाहूँ तो लिख दूं जीवन तुम्हे ,पर वो भी तो बस आधा होगा।     जो बाकी आधा बचा लिखूं तो ,    मृत्यु भी शायद अपनाना होगा।।   मैं चाहे जो भी कुछ लिख दूं, अंततः वो कम पर जाएगा। मेरे सरल से जीवन की वह असरलता हो तुम, मेरे प्रयास के अंतिम स्वांस में भी, मेरा प्रेम न तुम्हे लिख पाएगा।।"].join("\n")
},
  {
    title: "Open when you feel sad",
    message:
      "You do not have to be strong every single day. Take a breath, give yourself some kindness, and remember how precious you are. and I am always here for you. I love you. also you know: खिली धूप या पहली बारिश , शांत निशा ओर चहकता सहर । इनमें भी वो बात नहीं,    तुम्हे देखकर अब जो कुछ देखूं, कुछ भी लगता खास नहीं।।",
  },
  {
    title: "Open when you need a smile",
    message:["स्वप्न से होकर आया वो, स्वान ही था वो आया जो। उस क्षण मुझसे दूर हीं था वो, मैं पीड़ा में उलझा था जब,उस पीड़ा का तोड़ ना पूछो ,क्या खोया था मोल ना पूछो, कुछ नवीन से मेरे संबंध,मुझे रोकने में हुए सक्षम। रुकते ही मैंने जो खोया,मानो मैंने स्वप्न ही खोया। बना प्रारंभ कब अंत न जानू,पतन मैं अपना भाग्य ही मानू। जब तक मैं ये भाग्य संभालूं,कुदरत ने एक करवट ले ली, खोया फिर कुछ ओर भी मैंने,पर इस चेतना का अर्थ न पूछो। आने लगे फिर शयन में पीड़ा,जब कठिनाई चरम पे पहुँची, तब जाकर वो स्वप्न है आया। ना जानू मैं ये माया कैसी, क्यों मुझे फिर से अपनाया वो, मैं तो जानू इतना बस की, स्वप्न सा था जब आया वो। स्वप्न ही था वो आया जो।।"].join("\n")
  },
];

function App() {
  const [entered, setEntered] = useState(false);
  const [openLetter, setOpenLetter] = useState(null);
  const [giftOpened, setGiftOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const audioRef = useRef(null);

  async function toggleMusic() {
    const audio = audioRef.current;

    if (!audio) return;

    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
      return;
    }

    try {
      await audio.play();
      setMusicPlaying(true);
    } catch (error) {
      console.error("Music could not be played:", error);
      alert(
        "Please add your song to public/music/our-song.mp3 and try again."
      );
    }
  }

  return (
    <main>
      <audio
        ref={audioRef}
        src="/music/our-song.mp3"
        loop
        onPlay={() => setMusicPlaying(true)}
        onPause={() => setMusicPlaying(false)}
      />

      {!entered ? (
        <section className="welcome-screen">
          <div className="stars" aria-hidden="true">
            ✦　 ·　 ✧　 ·　 ✦　 ·　 ✧
          </div>

          <div className="welcome-content">
            <p className="eyebrow">A LITTLE SOMETHING FOR YOU</p>

            <div className="heart-icon" aria-hidden="true">
              ♡
            </div>

            <h1>
              Happy Birthday,
              <br />
              <span>Anjali. My Love</span>
            </h1>

            <p className="welcome-message">
              I made a little universe just for you.
              <br />
              Every little part of it comes from my heart.
            </p>

            <button
              className="primary-button"
              onClick={() => setEntered(true)}
            >
              Enter My Universe <span>♡</span>
            </button>

            <p className="small-note">
              Made with love, just for you.
            </p>
          </div>

          <div className="floating-heart heart-one">♥</div>
          <div className="floating-heart heart-two">♡</div>
          <div className="floating-heart heart-three">♥</div>
        </section>
      ) : (
        <>
          <nav className="navbar">
            <a className="brand" href="#home">
              our little universe <span>♡</span>
            </a>

            <button
              className="music-button"
              onClick={toggleMusic}
              aria-label={musicPlaying ? "Pause music" : "Play music"}
            >
              {musicPlaying ? "♫ Music on" : "♫ Play our song"}
            </button>
          </nav>

          <section className="hero-section" id="home">
            <p className="eyebrow">TODAY IS ALL ABOUT YOU</p>

            <h1>
              To my favorite
              <br />
              <span>human being.</span>
            </h1>

            <p className="section-description">
              Happy birthday, my love. If I could give you one thing
              today, it would be the ability to see yourself through
              my eyes.
            </p>

            <a className="text-link" href="#memories">
              Let's take a little journey <span>↓</span>
            </a>
          </section>

          <section className="memories-section" id="memories">
            <p className="eyebrow">CHAPTER ONE</p>
            <h2>Little moments, <span>big feelings.</span></h2>

            <p className="section-description">
              If You ever have any doubt about why you are so special to me. Just look at these memories you would know exactly what you need to know.
            </p>

            <div className="memory-grid">
              {memories.map((memory, index) => (
                <article className="memory-card" key={memory.title}>
                  <div className="memory-image">
                    <img
                      src={memory.image}
                      alt={memory.title}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="image-number">
                      0{index + 1}
                    </span>
                    <span className="image-heart">♡</span>
                  </div>

                  <div className="memory-caption">
                    <h3>{memory.title}</h3>
                    <p>{memory.caption}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="personalization-note">
              Replace these picture placeholders with your own
              favorite photos together.
            </p>
          </section>

          <section className="letters-section" id="letters">
            <p className="eyebrow">CHAPTER TWO</p>
            <h2>A few letters, <span>from my heart, Only for you</span></h2>

            <p className="section-description">
              For the days when you need a little extra love.
              Choose an envelope to open it.
            </p>

            <div className="letter-grid">
              {letters.map((letter, index) => (
                <button
                  className={`letter-card ${
                    openLetter === index ? "selected" : ""
                  }`}
                  key={letter.title}
                  onClick={() =>
                    setOpenLetter(
                      openLetter === index ? null : index
                    )
                  }
                  aria-expanded={openLetter === index}
                >
                  <span className="envelope-icon">
                    {openLetter === index ? "💌" : "✉"}
                  </span>
                  <span className="letter-title">{letter.title}</span>
                  <span className="letter-hint">
                    {openLetter === index
                      ? "Close letter ↑"
                      : "Tap to open ↓"}
                  </span>
                </button>
              ))}
            </div>

            {openLetter !== null && (
              <article className="letter-message">
                <span className="message-heart">♡</span>
                <h3>{letters[openLetter].title}</h3>
                <p>{letters[openLetter].message}</p>
                <p className="letter-signature">
                  Always sending you love. ♡
                </p>
              </article>
            )}
          </section>

          <section className="gift-section" id="gift">
            <p className="eyebrow">CHAPTER THREE</p>
            <h2>One last little <span>surprise.</span></h2>

            <p className="section-description">
              There is one more thing I want you to open.
            </p>

            <button
              className={`gift-box ${
                giftOpened ? "gift-opened" : ""
              }`}
              onClick={() => setGiftOpened(!giftOpened)}
              aria-expanded={giftOpened}
            >
              <span className="gift-emoji">
                {giftOpened ? "💝" : "🎁"}
              </span>
              <span>
                {giftOpened ? "A little love, just for you" : "Open your gift"}
              </span>
            </button>

            {giftOpened && (
              <article className="final-letter">
                <div className="final-heart">♥</div>
                <h2>Happy Birthday, <span>my love.</span></h2>

                <p>
                  Today is a celebration of you: your smile, your
                  kindness, your little habits, and all the things
                  that make you who you are.
                </p>

                <p>
                  I hope this new year brings you happiness,
                  peaceful days, exciting dreams, and countless
                  reasons to smile.
                </p>

                <p>
                  Thank you for being someone so special to me.
                  I wanted to make you something that was more
                  than just a gift — something you could revisit
                  whenever you wanted a little reminder of how
                  loved you are.
                </p>

                <p className="final-signature">
                  Made with all my heart, just for you.    
                  <span> One more thing: I LOVE YOU  ♡</span> 
                </p>
              </article>
            )}
          </section>

          <footer className="footer">
            <span>Made with love ♡</span>
            <span>A little universe, just for you.</span>
          </footer>
        </>
      )}
    </main>
  );
}

export default App;
