import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/icon/icon.js';
import '@material/web/divider/divider.js';
import { siteConfig } from '../config';

export default function Footer() {
  return (
    <footer style={{ marginTop: "4rem" }}>
      <md-divider></md-divider>
      <div style={{ 
        marginTop: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div className="md-typescale-body-medium" style={{display: "flex", alignItems: "center"}}>
          <md-icon class="material-symbols-rounded">mail</md-icon>
          <span style={{marginLeft: "0.5rem"}}>{siteConfig.email}</span>
        </div>
        <div style={{display: "flex", gap: "1rem"}}>
          <md-filled-tonal-icon-button onClick={() => window.open(siteConfig.social.github)}>
            <md-icon class="material-symbols-rounded">code</md-icon>
          </md-filled-tonal-icon-button>
        </div>
      </div>
    </footer>
  );
}
