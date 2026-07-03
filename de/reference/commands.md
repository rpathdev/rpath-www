---
title: Befehle
description: Vollständige rpath-Befehls- und Flag-Referenz.
---

# Befehle

```text
rpath [OPTIONS] [COMMAND]
```

Ohne Subcommand erstellt rpath einen Umgebungsplan. Wenn der Wrapper geladen ist, wendet ein einfaches `rpath` den emittierten Plan auf die aktuelle Shell an.

## Globale Optionen

| Option | Bedeutung |
| --- | --- |
| <code>--shell &lt;cmd&#124;powershell&#124;pwsh&#124;bash&#124;zsh&#124;fish&gt;</code> | Shell-Erkennung überschreiben. |
| `--json` | Maschinenlesbares JSON ausgeben. |
| `--verbose` | Wo unterstützt detailliertere Ausgabe anfordern. |
| `--dry-run` | Persistente Schreibvorgänge vermeiden. |
| `--no-dedupe` | Doppelte PATH-Einträge im Plan behalten. |
| `--strict` | Fehlende Pfade als harte Fehler behandeln. |
| `--emit` | Shell-Befehle für die gewählte Shell ausgeben. |
| `-h`, `--help` | Hilfe ausgeben. |
| `-V`, `--version` | Version ausgeben. |

## `rpath`

```sh
rpath
rpath --emit --shell bash
rpath --json
```

Erstellt den Plan, speichert ohne Dry Run eine automatische Version und gibt entweder Zusammenfassung, JSON oder Shell-Befehle aus.

## `doctor`

```sh
rpath doctor
rpath doctor --security
rpath doctor --json
```

Diagnostiziert ungültige, doppelte, fehlende und optional riskante PATH-Einträge. `--security` ergänzt Checks wie world-writable Unix-PATH-Verzeichnisse.

## `diff`

```sh
rpath diff
```

Zeigt hinzugefügte, entfernte, umsortierte und unveränderte PATH-Einträge im Vergleich zum aktuellen Prozess-PATH.

## `print`

```sh
rpath print
rpath print --json
```

Gibt nur den berechneten PATH-String aus.

## `repair`

```sh
rpath repair
rpath repair --emit
```

Erstellt einen Plan mit entfernten ungültigen Einträgen. Nutze `--emit`, um den reparierten Plan über einen Wrapper oder manuellen Emit-Ausdruck anzuwenden.

## `snapshot`

```text
rpath snapshot save [reason]
rpath snapshot list
rpath snapshot restore [id]
rpath snapshot delete <id>
```

Speichert, listet, stellt wieder her oder löscht manuelle Snapshots. Wenn `restore` keine ID erhält, wird der neueste Snapshot gewählt.

## `version`

```text
rpath version list
rpath version diff <from> <to>
rpath version restore <id>
```

Arbeitet mit automatischen Umgebungs-Versionen, die durch normale Refreshes und Watch Mode gespeichert werden.

## `install` und `uninstall`

```sh
rpath install
rpath install --all
rpath uninstall
rpath uninstall --all
```

Installiert oder entfernt Shell-Wrapper. `--all` zielt auf alle Shells, die zum aktuellen Betriebssystem passen.

## `init`

```sh
rpath init
rpath init --shell fish
```

Gibt das Shell-Initialisierungssnippet aus, ohne es zu schreiben.

## `watch`

```text
rpath watch [--once] [--interval <seconds>]
rpath watch --install-service
rpath watch --uninstall-service
rpath watch --status
```

Pollt PATH-Änderungen und speichert Versionen. Service-Installation nutzt eine Windows Scheduled Task, eine Linux-user-systemd-Service-Datei oder eine macOS LaunchAgent-plist.

## `integrate`

```text
rpath integrate <vscode|explorer|wsl|git-bash> <install|uninstall|status>
```

Installiert, entfernt oder prüft lokale Integrationshelfer.
