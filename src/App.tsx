import { useEffect, useState } from 'react';
import sunriseVideo from './assets/sunrise.mp4';

export default function App() {
  const [showText, setShowText] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [revealAccent, setRevealAccent] = useState(false);

  useEffect(() => {
    const accentTimer = setTimeout(() => {
      setRevealAccent(true);
    }, 1000);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1600);

    const subtitleTimer = setTimeout(() => {
      setShowSubtitle(true);
    }, 2800);

    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 7800);

    return () => {
      clearTimeout(accentTimer);
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

          {/* Animated Accent Line */}
          <div
            style={{
              ...styles.accentLine,
              scaleX: revealAccent ? 1 : 0,
            }}
          />

          {/* Brand Text */}
          <div style={styles.textWrapper}>
            <div style={styles.titleContainer}>
              <h1
                style={{
                  ...styles.title,
                  opacity: showText ? 1 : 0,
                  transform: showText
                    ? 'translateY(0px) scale(1)'
                    : 'translateY(50px) scale(0.95)',
                }}
              >
                AM Analytics
              </h1>
              <div
                style={{
                  ...styles.underline,
                  scaleX: showText ? 1 : 0,
                }}
              />
            </div>

            <p
              style={{
                ...styles.subtitle,
                opacity: showSubtitle ? 1 : 0,
                transform: showSubtitle
                  ? 'translateY(0px)'
                  : 'translateY(20px)',
              }}
            >
              Enlightening the world
            </p>

            <div
              style={{
                ...styles.badge,
                opacity: showSubtitle ? 1 : 0,
                transform: showSubtitle
                  ? 'translateY(0px) scale(1)'
                  : 'translateY(10px) scale(0.9)',
              }}
            >
              ✦
            </div>
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
      'radial-gradient(circle at 50% 40%, rgba(0,0,0,0.3), rgba(0,0,0,0.85))',
  },

  accentLine: {
    position: 'absolute',
    top: '32%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #F5C542, transparent)',
    transformOrigin: 'center',
    transition: 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
    zIndex: 99,
  },

  textWrapper: {
    position: 'absolute',
    top: '38%',
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

  titleContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif',
    fontSize: 'clamp(3.5rem, 9vw, 6rem)',
    fontWeight: 800,
    letterSpacing: '-0.03em',
    lineHeight: 1,
    margin: 0,
    color: '#FFFFFF',
    background: 'linear-gradient(135deg, #F5C542 0%, #FFE066 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    transition: 'opacity 1.5s cubic-bezier(0.23, 1, 0.320, 1), transform 1.5s cubic-bezier(0.23, 1, 0.320, 1)',
  },

  underline: {
    position: 'absolute',
    bottom: '-12px',
    width: '100%',
    height: '3px',
    background: 'linear-gradient(90deg, transparent, #F5C542, transparent)',
    transformOrigin: 'center',
    transform: 'scaleX(0)',
    transition: 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
  },

  subtitle: {
    fontSize: 'clamp(0.95rem, 2.2vw, 1.4rem)',
    color: '#E5E7EB',
    maxWidth: '620px',
    margin: '1.2rem 0 0 0',
    fontWeight: 300,
    letterSpacing: '0.05em',
    wordSpacing: '0.15em',
    transition: 'opacity 1.2s cubic-bezier(0.23, 1, 0.320, 1) 0.4s, transform 1.2s cubic-bezier(0.23, 1, 0.320, 1) 0.4s',
  },

  badge: {
    marginTop: '1.5rem',
    fontSize: '1.5rem',
    color: '#F5C542',
    opacity: 0.7,
    transition: 'opacity 1.2s cubic-bezier(0.23, 1, 0.320, 1) 0.5s, transform 1.2s cubic-bezier(0.23, 1, 0.320, 1) 0.5s',
    animation: 'pulse 3s ease-in-out 3.5s infinite',
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
