import React from 'react';
import '@material/web/iconbutton/filled-tonal-icon-button.js';
import '@material/web/icon/icon.js';
import { siteConfig } from '../config';

export default function Header() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    // 使用正确的事件类型定义
    const event = new CustomEvent('themeChanged', {
      detail: { theme: isDark ? 'dark' : 'light' }
    });
    window.dispatchEvent(event);
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      background: "rgba(var(--md-sys-color-surface-rgb), 0.9)",
      backdropFilter: "blur(20px)",
      display: 'flex',
      justifyContent: 'center',
      zIndex: 100
    }}>
      <div style={{
        width: 'var(--md-sys-container-width)',
        padding: 'var(--md-sys-spacing-3) var(--md-sys-spacing-2)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="layout-row">
          <div style={{
            background: "var(--md-sys-color-primary-container)",
            padding: "8px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center"
          }}>
            <md-icon style={{
              color: "var(--md-sys-color-on-primary-container)",
              fontSize: `${siteConfig.icons.headerSize}px`,
              width: `${siteConfig.icons.headerSize}px`,
              height: `${siteConfig.icons.headerSize}px`
            }}>
              {siteConfig.icons.header}
            </md-icon>
          </div>
          <span className="md-typescale-title-large">{siteConfig.title}</span>
        </div>

        <nav className="layout-row" style={{gap: "var(--md-sys-spacing-3)"}}>
          <div className="layout-row" style={{gap: "var(--md-sys-spacing-2)"}}>
            <a href={siteConfig.social.resume} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
              <md-filled-button>
                <md-icon slot="icon">description</md-icon>
                简历
              </md-filled-button>
            </a>
            {/* 在窄屏下隐藏mail按钮 */}
            <a href={`mailto:${siteConfig.email}`} style={{
              textDecoration: 'none',
              display: 'none' // 默认隐藏
            }} className="show-on-wide">
              <md-filled-tonal-icon-button>
                <md-icon>mail</md-icon>
              </md-filled-tonal-icon-button>
            </a>
            <md-filled-tonal-icon-button onClick={toggleTheme}>
              <md-icon>dark_mode</md-icon>
            </md-filled-tonal-icon-button>
          </div>
        </nav>
      </div>

      {/* 添加CSS媒体查询 */}
      <style>{`
        @media (min-width: 768px) {
          .show-on-wide {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}