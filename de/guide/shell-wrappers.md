---
title: Shell-Wrapper
description: Wie rpath eine laufende Shell-Sitzung aktualisiert.
---

# Shell-Wrapper

`rpath` braucht einen Wrapper, weil Umgebungsvariablen vom Elternprozess an Kindprozesse vererbt werden. Eine Kind-CLI kann Befehle ausgeben, aber sie kann die bereits laufende Eltern-Shell nicht direkt ändern.

## Was `rpath install` schreibt

| Shell | Ziel |
| --- | --- |
| Windows PowerShell | `~/Documents/WindowsPowerShell/Microsoft.PowerShell_profile.ps1` |
| PowerShell Core | `~/Documents/PowerShell/Microsoft.PowerShell_profile.ps1` |
| bash | `~/.bashrc` |
| zsh | `~/.zshrc` |
| fish | `~/.config/fish/config.fish` |
| cmd | Plattform-Datenverzeichnis `rpath/cmd-init.cmd` plus HKCU Command Processor AutoRun-Versuch |

Profil-Dateien werden gesichert, bevor rpath seinen markierten Block ersetzt.

## Verhalten des Wrappers

Ohne Argumente wertet der Wrapper aus:

```sh
rpath --emit --shell <shell>
```

Mit Argumenten delegiert er an die Binary:

```sh
rpath doctor
rpath snapshot list
rpath integrate vscode status
```

So bleiben Inspektionsbefehle normal, während ein einfaches `rpath` die aktive Sitzung aktualisiert.

## Snippet anzeigen

```sh
rpath init --shell bash
rpath init --shell fish
```

```powershell
rpath init --shell pwsh
```

Nutze `init`, wenn du den Wrapper prüfen oder manuell einfügen möchtest.

## Deinstallation

```sh
rpath uninstall
rpath uninstall --all
```

Uninstall entfernt nur den markierten rpath-Block oder die Wrapper-Datei. Andere Profilinhalte bleiben erhalten.

Um auch die gehostet installierte Binary und den PATH-Eintrag zu entfernen, nutze die [Deinstallation](./uninstall).
