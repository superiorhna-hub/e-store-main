// Inlined before paint to restore the saved theme without a flash of wrong theme
export function ThemeScript() {
  const script = `
    (function(){
      try {
        var t = localStorage.getItem('cs-theme');
        if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', t);
      } catch(_) {}
    })();
  `
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
