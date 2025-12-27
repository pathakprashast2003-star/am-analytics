import { useEffect, useState } from 'react';
import sunriseVideo from './assets/sunrise.mp4';

export default function App() {
  const [showText, setShowText] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(false);

  // Timing control
  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1400); // title fades in with sunrise

    const subtitleTimer = setTimeout(() => {
      setShowSubtitle(true);
    }, 2200); // subtitle enters after title

    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 7500); // total intro duration

    return () => {
      clearTimeout(textTimer);
      clearTimeout(subtitleTimer);
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
                  ? 'translateY(0px) scale(1)'
                  : 'translateY(40px) scale(0.92)',
              }}
            >
              AM Analytics
            </h1>

            <p
              style={{
                ...styles.subtitle,
                opacity: showSubtitle ? 1 : 0,
                transform: showSubtitle
                  ? 'translateY(0px)'
                  : 'translateY(16px)',
              }}
            >
              Enlightening the world
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
    top: '35%',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    pointerEvents: 'none',
    zIndex: 100,
  },

  title: {
    fontFamily: 'system-ui, -apple-system, serif',
    fontSize: 'clamp(3.2rem, 8vw, 5.5rem)',
    fontWeight: 700,
    color: '#F5C542',
    margin: 0,
    marginBottom: '0.8rem',
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    transition: 'opacity 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },

  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.35rem)',
    color: '#D1D5DB',
    maxWidth: '600px',
    margin: 0,
    fontWeight: 400,
    letterSpacing: '0.02em',
    transition: 'opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s, transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
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
