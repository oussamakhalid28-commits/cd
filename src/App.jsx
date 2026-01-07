import React from 'react'

export default function App() {
  return (
    <div className="app" dir="rtl">
      <header>
        <h1>CD App</h1>
        <p>تطبيق جاهز لبناء Android باستخدام Capacitor + Vite + React.</p>
      </header>

      <main>
        <p>لبناء التطبيق وتشغيله:</p>
        <ol>
          <li>npm install</li>
          <li>npm run build</li>
          <li>npx cap add android</li>
          <li>npx cap sync</li>
          <li>npx cap open android</li>
        </ol>
      </main>
    </div>
  )
}
