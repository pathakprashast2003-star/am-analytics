import { useEffect, useState } from 'react';
import sunriseVideo from './assets/sunrise.mp4';

export default function App() {
  const [showText, setShowText] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Timing control
  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1200); // text fades in after sunrise begins

    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 7000); // total intro duration

    return () => {
      clearTimeout(textTimer);
      clearTimeout(introTimer);
    };
  }, []);

  return (
    <>
      {/* ================= INTRO SECTION ================= */}
      {showIntro && (
        <div style={styles.intro}>
          {/* Background Video */}
          <video
            src={sunriseVideo}
            autoPlay
            muted
            playsInline
            preload="auto"
            style={styles.video}
          />

          {/* Cinematic Overlay */}
          <div style={styles.overlay} />

          {/* Brand Text */}
          <div style={styles.textWrapper}>
            <h1
              style={{
                ...styles.title,
                opacity: showText ? 1 : 0,
                transform: showText
                  ? 'translateY(0px)'
                  : 'translateY(24px)',
              }}
            >
              AM Analytics
            </h1>

            <p
              style={{
                ...styles.subtitle,
                opacity: showText ? 1 : 0,
                transform: showText
                  ? 'translateY(0px)'
                  : 'translateY(18px)',
              }}
            >
              Enlightening the world through data
            </p>
          </div>
        </div>
      )}

      {/* ================= MAIN LANDING ================= */}
      {!showIntro && (
        <main style={styles.main}>
          <section style={styles.section}>
            <h2 style={styles.heading}>
              Data that drives decisions.
            </h2>
            <p style={styles.description}>
              Advanced analytics, forecasting, and intelligence systems
              for modern enterprises.
            </p>
          </section>
        </main>
      )}
    </>
  );
}

/* ================= STYLES ================= */

const styles: { [key: string]: React.CSSProperties } = {
  intro: {
    position: 'fixed',
    inset: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0B0D10',
    overflow: 'hidden',
    zIndex: 9999,
  },

  video: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  overlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.45), rgba(0,0,0,0.15))',
  },

  textWrapper: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    pointerEvents: 'none',
  },

  title: {
    fontFamily: 'serif',
    fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
    color: '#F5C542',
    marginBottom: '1rem',
    letterSpacing: '0.03em',
    transition: 'opacity 1.2s ease, transform 1.2s ease',
  },

  subtitle: {
    fontSize: '1.25rem',
    color: '#E5E7EB',
    maxWidth: '640px',
    transition:
      'opacity 1.2s ease 0.2s, transform 1.2s ease 0.2s',
  },

  main: {
    minHeight: '100vh',
    backgroundColor: '#0B0D10',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },

  section: {
    maxWidth: '900px',
    textAlign: 'center',
  },

  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },

  description: {
    fontSize: '1.25rem',
    color: '#D1D5DB',
  },
};
