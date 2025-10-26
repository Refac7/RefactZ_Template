export const siteConfig = {
  // 基础信息
  title: 'Resilient',
  description: '前端工程师，专注于现代静态站点、React 与跨平台桌面应用。',
  email: 'you@example.com',

  // 社交链接
  social: {
    github: 'https://github.com/yourusername',
    resume: '/resume.pdf'
  },

  // 项目列表
  projects: [
    { 
      title: "静态博客",
      desc: "Astro + React + MDX，部署到 Vercel",
      icon: "description",
      preview: "#",
      source: "#"
    },
    { 
      title: "桌面浏览器",
      desc: "SwiftUI + WKWebView，集成自定义 UI",
      icon: "computer",
      preview: "#",
      source: "#"
    },
    { 
      title: "评论系统集成",
      desc: "Waline 与 Umami 的调试与部署",
      icon: "chat",
      preview: "#",
      source: "#"
    }
  ],

  // 导航菜单
  nav: [
    { label: '项目', href: '#projects' },
    { label: '联系', href: 'mailto:you@example.com' }
  ],

  // CTA（可自定义）
  cta: {
    label: "项目集",
    href: "#projects" // 支持内锚或外链（外链会在新标签打开）
  }
} as const;

// 主题配置
export const themeConfig = {
  colors: {
    light: {
      primary: '#6750A4',
      primaryContainer: '#EADDFF',
      // ...existing colors...
    },
    dark: {
      primary: '#D0BCFF',
      primaryContainer: '#4F378B',
      // ...existing colors...
    }
  }
} as const;
