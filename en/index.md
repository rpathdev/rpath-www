---
layout: page
title: rpath
description: Refresh your shell PATH and environment without restarting.
editLink: false
---

<main class="rpath-home">
  <div class="rpath-home__inner">
    <section class="rpath-hero">
      <div class="rpath-hero__copy">
        <img class="rpath-logo-mark" src="/logo.png" alt="rpath logo" />
        <h1 class="rpath-title">refresh your <span>environment.</span></h1>
        <p class="rpath-lede">
          rpath rebuilds PATH from system, user, shell, and package-manager sources, removes duplicate entries, preserves critical system paths, and emits shell commands that update the current terminal session.
        </p>
        <div class="rpath-actions">
          <a class="rpath-action rpath-action--primary" href="/guide/installation">Start with rpath</a>
          <a class="rpath-action" href="/reference/commands">Command reference</a>
          <a class="rpath-action" href="https://github.com/rpathdev/rpath">GitHub</a>
        </div>
      </div>
      <div class="rpath-terminal" aria-label="rpath terminal preview">
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
          <div class="muted">wrapper evaluates the emitted PATH in this shell</div>
        </div>
      </div>
    </section>
  </div>
</main>
