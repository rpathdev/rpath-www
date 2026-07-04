---
title: Installation
description: rpath per Skript, Release-Artefakt oder aus dem Quellcode installieren.
---

# Installation

`rpath` ist eine einzelne Rust-CLI namens `rpath` (`rpath.exe` unter Windows). Der gehostete Installer legt sie benutzerlokal ab, prueft die GitHub-Release-Checksumme und fragt, ob der Shell-Wrapper fuer die erkannte Shell installiert werden soll.

## Installationsskripte

Nutze den gehosteten Installer:

::: code-group

```powershell [Windows PowerShell]
irm https://get.rpath.dev/install.ps1 | iex
```

```sh [Linux/macOS]
curl -fsSL https://get.rpath.dev/install.sh | sh
```

:::

Danach ein neues Terminal öffnen und prüfen:

```sh
rpath --version
rpath doctor
```

Defaults:

| Plattform | Installationsverzeichnis |
| --- | --- |
| Linux/macOS | `~/.local/bin` |
| Windows | `%LOCALAPPDATA%\Programs\rpath\bin` |

Nutze `--dry-run` oder `-DryRun`, um die Installation vorab zu pruefen. Mit `--wrappers no` oder `-InstallWrappers no` ueberspringst du die Wrapper-Frage.

## Release-Artefakte

GitHub Releases paketieren die kompilierte Binary zusammen mit `README.md`, `LICENSE` und `CHANGELOG.md`.

| Plattform | Artefakt |
| --- | --- |
| Linux x64 | `rpath-linux-x86_64.tar.gz` |
| Linux arm64 | `rpath-linux-aarch64.tar.gz` |
| macOS Intel | `rpath-macos-x86_64.tar.gz` |
| macOS Apple Silicon | `rpath-macos-aarch64.tar.gz` |
| Windows x64 | `rpath-windows-x86_64.zip` |
| Windows arm64 | `rpath-windows-aarch64.zip` |

Lade das passende Archiv herunter, entpacke es und lege die Binary in ein Verzeichnis, das bereits auf `PATH` liegt.

## Upgrade

```sh
rpath upgrade
rpath upgrade --check
```

`upgrade` nutzt explizit das Netzwerk, prueft das neueste GitHub Release, verifiziert die Release-Checksumme und ersetzt die aktuelle installierte Binary, wenn eine neuere Version verfuegbar ist.

## Aus dem Quellcode bauen

```sh
git clone https://github.com/builtbyjonas/rpath.git
cd rpath
cargo build --release -p rpath
```

Die Binary liegt danach hier:

::: code-group

```powershell [Windows]
.\target\release\rpath.exe
```

```sh [Linux/macOS]
./target/release/rpath
```

:::

## Wrapper installieren

Sobald die Binary auffindbar ist:

```sh
rpath install
```

Du kannst die Shell auch explizit wählen:

```sh
rpath install --shell bash
rpath install --shell zsh
rpath install --shell fish
```

```powershell
rpath install --shell powershell
rpath install --shell pwsh
rpath install --shell cmd
```

Mit `rpath install --all` installiert rpath alle Wrapper, die zum aktuellen Betriebssystem passen.

## Installation prüfen

```sh
rpath doctor
rpath diff
rpath
```

Wenn `rpath` einen Plan ausgibt, aber PATH nicht ändert, läuft die Binary direkt und der Shell-Wrapper ist noch nicht geladen. Führe `rpath install` aus, starte die Shell neu und versuche es erneut.
