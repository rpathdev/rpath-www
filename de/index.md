---
layout: page
title: rpath
description: Aktualisiere deinen Shell-PATH und deine Umgebung ohne Neustart.
editLink: false
---

<main class="rpath-home">
  <div class="rpath-home__inner">
    <section class="rpath-hero">
      <div class="rpath-hero__copy">
        <img class="rpath-logo-mark" src="/logo.png" alt="rpath Logo" />
        <h1 class="rpath-title">refresh your <span>environment.</span></h1>
        <p class="rpath-lede">
          rpath baut PATH aus System-, Benutzer-, Shell- und Paketmanager-Quellen neu auf, entfernt doppelte Einträge, erhält kritische Systempfade und gibt Shell-Befehle aus, die die aktuelle Terminalsitzung aktualisieren.
        </p>
        <div class="rpath-actions">
          <a class="rpath-action rpath-action--primary" href="/de/guide/installation">Mit rpath starten</a>
          <a class="rpath-action" href="/de/reference/commands">Befehlsreferenz</a>
          <a class="rpath-action" href="https://github.com/rpathdev/rpath">GitHub</a>
        </div>
      </div>
      <div class="rpath-terminal" aria-label="rpath Terminalvorschau">
        <div class="rpath-terminal__bar">
          <span class="rpath-terminal__dots"><span></span><span></span><span></span></span>
          <span>rpath --emit</span>
        </div>
        <div class="rpath-terminal__screen">
          <div><span class="prompt">$</span> rpath doctor</div>
          <div>No PATH problems found</div>
          <div class="rpath-terminal__gap"></div>
          <div><span class="prompt">$</span> rpath diff</div>
          <div>Added:</div>
          <div class="indent">/opt/homebrew/bin</div>
          <div>Removed:</div>
          <div class="indent">none</div>
          <div>Reordered:</div>
          <div class="indent">/usr/bin</div>
          <div>Unchanged: 12</div>
          <div class="rpath-terminal__gap"></div>
          <div><span class="prompt">$</span> rpath</div>
          <div class="muted">Wrapper wertet den ausgegebenen PATH in dieser Shell aus</div>
        </div>
      </div>
    </section>
  </div>
</main>
