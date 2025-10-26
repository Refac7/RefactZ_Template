import React from "react";
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/icon/icon.js';
import { siteConfig } from '../config';

export default function Projects() {
  return (
    <section id="projects" style={{ marginTop: "var(--md-sys-spacing-5)" }}>
      <div className="section-header">
        <div className="layout-row">
          <div style={{
            background: "var(--md-sys-color-primary-container)",
            padding: "8px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center"
          }}>
            <md-icon style={{color: "var(--md-sys-color-on-primary-container)"}}>terminal</md-icon>
          </div>
          <h2 className="md-typescale-headline-medium">项目</h2>
        </div>
        <p className="md-typescale-body-large" 
           style={{color: "var(--md-sys-color-on-surface-variant)", marginTop: "8px"}}>
          探索我的最新作品集
        </p>
      </div>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "var(--md-sys-spacing-3)",
        alignItems: "start"
      }}>
        {siteConfig.projects.map((p, i) => (
          <article className="card" key={i}>
            <div className="layout-column">
              <div className="layout-row">
                <md-icon>{p.icon}</md-icon>
                <h3 className="md-typescale-title-large">{p.title}</h3>
              </div>
              
              <p className="md-typescale-body-medium" 
                 style={{ color: "var(--md-sys-color-on-surface-variant)" }}>
                {p.desc}
              </p>
              
              <md-divider style={{ margin: "var(--md-sys-spacing-2) 0" }}></md-divider>
              
              <div className="layout-row">
                <a
                  href={p.preview}
                  target={p.preview && !p.preview.startsWith('#') ? "_blank" : undefined}
                  rel={p.preview && !p.preview.startsWith('#') ? "noopener noreferrer" : undefined}
                  style={{ textDecoration: 'none' }}
                >
                  <md-filled-button>
                    <md-icon class="material-symbols-outlined" slot="icon">open_in_new</md-icon>
                    预览
                  </md-filled-button>
                </a>

                <a
                  href={p.source}
                  target={p.source && !p.source.startsWith('#') ? "_blank" : undefined}
                  rel={p.source && !p.source.startsWith('#') ? "noopener noreferrer" : undefined}
                  style={{ textDecoration: 'none' }}
                >
                  <md-filled-button>
                    <md-icon class="material-symbols-outlined" slot="icon">code</md-icon>
                    源码
                  </md-filled-button>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
