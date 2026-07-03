---
title: Integrationen
description: rpath mit VS Code, Explorer, WSL und Git Bash verwenden.
---

# Integrationen

Integrationen sind lokale Helfer. Sie verändern das Kernmodell der PATH-Planung nicht.

```sh
rpath integrate <target> <action>
```

Targets sind `vscode`, `explorer`, `wsl` und `git-bash`. Actions sind `install`, `uninstall` und `status`.

## VS Code

```sh
rpath integrate vscode install
rpath integrate vscode status
```

Die VS-Code-Integration installiert den Shell-Wrapper für die erkannte Shell und schreibt einen Integrationsmarker. Integrierte Terminals nutzen danach dasselbe Shell-Profil-Verhalten wie normale Terminals.

## Windows Explorer

```powershell
rpath integrate explorer install
rpath integrate explorer status
```

Explorer-Integration wird nur unter Windows unterstützt. Sie versucht, einen HKCU-Kontextmenüeintrag hinzuzufügen und einen Environment-Change-Marker zu senden. Unter Linux oder macOS meldet der Status, dass Explorer-Integration nicht unterstützt wird.

## WSL

```sh
rpath integrate wsl install
```

Die WSL-Integration schreibt ein Sync-Helferskript in den rpath-State. Source dieses Skript aus dem WSL-Shell-Startup, wenn du eine von Windows emittierte PATH-Form importieren möchtest.

## Git Bash

```sh
rpath integrate git-bash install
rpath integrate git-bash status
```

Git Bash nutzt den bash-Wrapper in `~/.bashrc`. Wenn Git Bash weiterhin nur einen Plan ausgibt, öffne ein neues Git-Bash-Fenster und prüfe, ob `~/.bashrc` geladen wird.

## Dry Runs

```sh
rpath integrate vscode install --dry-run
rpath watch --install-service --dry-run
```

Nutze `--dry-run`, um vor dem Schreiben von Dateien, Registry-Einträgen, Service-Definitionen oder Markern zu sehen, was rpath ändern würde.
