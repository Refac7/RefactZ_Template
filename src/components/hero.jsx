import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/icon/icon.js';
import { siteConfig } from '../config';

export default function Hero() {
  return (
    <section className="card" style={{
      background: "var(--md-sys-color-surface-container-highest)",
      marginBottom: "var(--md-sys-spacing-5)",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        width: "120px",
        height: "120px",
        borderRadius: "var(--md-sys-shape-corner-extra-large)",
        background: "var(--md-sys-color-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}>
        <md-ripple></md-ripple>
        <span className="material-symbols-outlined" style={{
          fontSize: `${siteConfig.icons.heroSize}px`,
          width: `${siteConfig.icons.heroSize}px`,
          height: `${siteConfig.icons.heroSize}px`,
          color: "var(--md-sys-color-on-primary)"
        }}>
          {siteConfig.icons.hero}
        </span>
      </div>
      <div>
        <h1 className="md-typescale-display-medium" 
            style={{ color: "var(--md-sys-color-on-primary-container)", marginBottom: "0.5rem" }}>
          {siteConfig.title}
        </h1>
        <p className="md-typescale-body-large" 
           style={{ color: "var(--md-sys-color-on-surface-variant)", marginBottom: "1.5rem" }}>
          {siteConfig.description}
        </p>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a
            href={siteConfig.cta.href}
            target={siteConfig.cta.href && !siteConfig.cta.href.startsWith('#') ? "_blank" : undefined}
            rel={siteConfig.cta.href && !siteConfig.cta.href.startsWith('#') ? "noopener noreferrer" : undefined}
            style={{ textDecoration: 'none' }}
          >
            <md-filled-button>
              <md-icon slot="icon">rocket_launch</md-icon>
              {siteConfig.cta.label}
            </md-filled-button>
          </a>
          <a href={`mailto:${siteConfig.email}`} style={{ textDecoration: 'none' }}>
            <md-outlined-button>
              <md-icon slot="icon">mail</md-icon>
              联系
            </md-outlined-button>
          </a>
        </div>
      </div>
    </section>
  );
}
