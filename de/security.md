---
title: Sicherheit
description: rpath-Sicherheitsmodell und Melden von Schwachstellen.
---

# Sicherheit

`rpath` arbeitet mit Shell-Profilen, PATH, Registry-Werten, Service-Definitionen und ausgegebenen Befehlen. Behandle Änderungen an diesen Oberflächen sorgfältig.

## Sicherheitsprinzipien

- Keine Runtime-Netzwerkaufrufe.
- Keine systemweite Umgebungsänderung während eines Refreshs.
- Keine Shell-Befehle, wenn der Umgebungsplan harte Fehler enthält.
- Profil-Dateien werden gesichert, bevor Wrapper-Installation sie ändert.
- Registry- und Service-Integrationen bleiben möglichst im Benutzerkontext.

## Was Refresh nicht tut

Ein einfacher Refresh schreibt nicht in System-PATH, Maschinen-Registry-Keys, Paketmanager-Konfiguration oder Shell-Startdateien. Er berechnet einen Plan und gibt Befehle für die aktuelle Shell aus.

Persistente Schreibvorgänge passieren nur bei expliziten Befehlen wie:

```sh
rpath install
rpath uninstall
rpath snapshot save
rpath watch --install-service
rpath integrate explorer install
```

Nutze `--dry-run`, um unterstützte Schreibvorgänge vorher zu prüfen.

## PATH-Risiko-Checks

```sh
rpath doctor --security
```

Sicherheitsdiagnosen enthalten aktuell einfache Checks wie world-writable Unix-PATH-Einträge. Prüfe außerdem ungewöhnliche PATH-Reihenfolgen manuell. Ein schreibbares Verzeichnis vor vertrauenswürdigen Systemverzeichnissen kann Command Shadowing ermöglichen.

## Schwachstellen melden

Bitte melde vermutete Schwachstellen privat an:

```text
me@byjonas.dev
```

Öffne kein öffentliches Issue für Schwachstellen rund um Shell Injection, Profil-Schreibvorgänge, Registry-Edits, PATH Hijacking oder unsichere Umgebungsänderungen.

Bitte angeben:

- Betroffene Plattform und Shell
- `rpath --version`
- Reproduktionsschritte
- Erwartetes und tatsächliches Verhalten
- Ob lokale Zugriffsrechte erforderlich sind

Security-Fixes zielen auf die neueste veröffentlichte Version von `rpath`.
