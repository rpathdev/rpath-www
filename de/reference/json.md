---
title: JSON-Ausgabe
description: Maschinenlesbare rpath-Ausgabeformen.
---

# JSON-Ausgabe

Die meisten rpath-Befehle akzeptieren `--json`. Die JSON-Formen sind für lokale Automatisierung und Diagnose gedacht. Sie sind vor Version 1.0 noch nicht eingefroren und können sich ändern.

## Environment Plan

```sh
rpath --json
rpath repair --json
```

Wichtige Felder:

| Feld | Bedeutung |
| --- | --- |
| `shell` | Erkannte oder gewählte Shell. |
| `platform` | Plattformname wie `windows`, `linux` oder `macos`. |
| `variables` | Erfasste Umgebungsvariablen, nachdem PATH durch den berechneten Wert ersetzt wurde. |
| `path` | Finaler PATH-String. |
| `path_entries` | Expandierte Einträge mit Quelle, Gültigkeit, Existenz, Critical- und Duplicate-Flags. |
| `diagnostics` | Warnungen und Fehler aus Sammlung und Validierung. |
| `stats` | Eintragszahlen, entfernte Duplikate, ungültige Einträge, Hinzufügungen und Entfernungen. |
| `generated_at_unix` | Unix-Zeitstempel für den Plan. |

## Diagnosen

```sh
rpath doctor --json
rpath doctor --security --json
```

Jede Diagnose hat:

```json
{
  "severity": "warning",
  "code": "missing-path",
  "message": "PATH entry does not exist on disk",
  "path": "/missing/bin"
}
```

Severity-Werte sind `info`, `warning` und `error`.

## Diff Report

```sh
rpath diff --json
rpath version diff <from> <to> --json
```

```json
{
  "added": [],
  "removed": [],
  "reordered": [],
  "unchanged_count": 12
}
```

## Snapshots und Versionen

```sh
rpath snapshot list --json
rpath version list --json
```

Snapshot-ähnliche Objekte enthalten `id`, `created_at_unix`, `shell`, `platform`, `variables`, `path`, `path_entries` und `reason`.

## Emit-Pläne

```sh
rpath snapshot restore <id> --json
rpath version restore <id> --json
```

Emit-Pläne enthalten die gewählte Shell, Befehlstext, PATH-String und Warnungen.

## Integrationsberichte

```sh
rpath integrate vscode status --json
rpath watch --status --json
```

Berichte enthalten:

| Feld | Bedeutung |
| --- | --- |
| `target` | Integrationsziel. |
| `action` | Angeforderte Aktion. |
| `changed` | Ob der Befehl lokalen Zustand geändert hat. |
| `supported` | Ob das Target auf dieser Plattform unterstützt wird. |
| `path` | Relevanter Marker-, Service- oder Wrapper-Pfad, falls vorhanden. |
| `message` | Menschenlesbarer Status. |

## Tipps für Automatisierung

- Für Bugreports `doctor --json`, `diff --json` und `--version` bevorzugen.
- Vor Install-, Uninstall-, Service- oder Integrationsbefehlen `--dry-run --json` nutzen.
- Keine menschlichen Zusammenfassungen parsen, wenn JSON-Ausgabe verfügbar ist.
