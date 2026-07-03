---
title: Snapshots & Versionen
description: PATH-Zustände speichern, vergleichen und wiederherstellen.
---

# Snapshots & Versionen

Snapshots und Versionen sind JSON-Dateien im Plattform-Datenverzeichnis unter einem `rpath`-Ordner. Sie enthalten Shell, Plattform, Variablen, PATH-String, PATH-Einträge und einen Grund.

## Manuelle Snapshots

```sh
rpath snapshot save "vor node installer"
rpath snapshot list
rpath snapshot restore
rpath snapshot restore <id>
rpath snapshot delete <id>
```

Wenn `snapshot restore` keine ID erhält, nutzt rpath den neuesten Snapshot.

## Automatische Versionen

Ein einfaches `rpath` speichert nach einem erfolgreichen Plan-Build ohne Dry Run eine Version. Watch Mode kann ebenfalls Versionen speichern, wenn sich PATH ändert.

```sh
rpath version list
rpath version diff <from> <to>
rpath version restore <id>
```

`version diff` meldet hinzugefügte, entfernte, umsortierte und unveränderte Einträge zwischen zwei gespeicherten Plänen.

## Sicher wiederherstellen

Restore-Befehle bereiten einen Emit-Plan vor. Um den wiederhergestellten PATH auf die aktuelle Shell anzuwenden, nutze Emit-Modus über den Wrapper:

```sh
rpath snapshot restore <id> --emit
rpath version restore <id> --emit
```

Ohne `--emit` gibt rpath eine Meldung aus, welcher Restore vorbereitet ist.

## Watch Mode

```sh
rpath watch --once
rpath watch --interval 10
rpath watch --install-service
rpath watch --status
rpath watch --uninstall-service
```

Unter Windows versucht die Service-Installation, eine geplante Benutzeraufgabe namens `rpath-watch` zu erstellen. Unter Linux schreibt sie eine user-systemd-Service-Datei. Unter macOS schreibt sie eine LaunchAgent-plist.
