---
title: Schnellstart
description: PATH in einer laufenden Shell mit rpath aktualisieren.
---

# Schnellstart

Der wichtigste Punkt: Ein nativer Kindprozess kann seine Eltern-Shell nicht direkt verändern. `rpath install` fügt eine kleine Shell-Funktion oder einen `cmd`-AutoRun-Wrapper hinzu, damit der einfache Befehl `rpath --emit` in der aktuellen Sitzung auswerten kann.

## 1. Wrapper installieren

```sh
rpath install
```

Starte das Terminal einmal neu oder source dein Profil manuell.

## 2. Aktuelle Sitzung aktualisieren

```sh
rpath
```

Wenn der Wrapper geladen ist, wertet `rpath` die ausgegebenen Shell-Befehle still aus. Ohne Wrapper gibt rpath einen Plan aus und zeigt, wie `--emit` genutzt werden kann.

## 3. Plan prüfen

```sh
rpath doctor
rpath diff
rpath print
```

`doctor` meldet ungültige, doppelte, fehlende und optionale Sicherheitsbefunde. `diff` vergleicht den berechneten Plan mit dem aktuellen PATH. `print` gibt nur den finalen PATH-String aus.

## Manueller Emit-Modus

Nutze den manuellen Modus, wenn rpath noch kein Profil bearbeiten soll.

::: code-group

```powershell [PowerShell]
Invoke-Expression (& rpath --emit --shell pwsh)
```

```bat [cmd]
for /f "delims=" %i in ('rpath --emit --shell cmd') do @%i
```

```sh [bash/zsh]
eval "$(rpath --emit --shell bash)"
```

```fish [fish]
rpath --emit --shell fish | source
```

:::

## Erste Checks

```sh
rpath doctor --json
rpath diff --json
rpath --version
```

Diese Befehle sind für Bugreports hilfreich, weil sie den berechneten Plan ohne Profil-Dateien oder Screenshots beschreiben.
