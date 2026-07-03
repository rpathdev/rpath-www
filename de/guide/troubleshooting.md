---
title: Fehlerbehebung
description: Häufige rpath-Probleme bei Setup, Wrappern, Diagnosen und Integrationen lösen.
---

# Fehlerbehebung

Starte mit:

```sh
rpath doctor --verbose
rpath diff
rpath --version
```

Nutze `--json`, wenn du Ausgaben an ein Issue anhängst.

## `rpath` gibt einen Plan aus, aber PATH ändert sich nicht

Die Binary läuft direkt. Ein Kindprozess kann die Eltern-Shell nicht ändern.

Fix:

```sh
rpath install
```

Starte die Shell neu. Für manuelle Nutzung werte Emit-Ausgabe aus:

```sh
eval "$(rpath --emit --shell bash)"
```

## PowerShell lädt das Profil nicht

Wenn PowerShell einen Execution-Policy-Fehler meldet, prüfe die Richtlinien:

```powershell
Get-ExecutionPolicy -List
```

Für ein normales Setup pro Benutzer:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Starte PowerShell danach neu.

## `rpath.exe was not found on PATH`

Der Wrapper wurde geladen, aber die Binary ist nicht auffindbar. Füge das Verzeichnis mit `rpath.exe` deinem persistenten Benutzer-PATH hinzu oder verschiebe die Binary in ein bestehendes PATH-Verzeichnis. Öffne eine neue Shell und führe aus:

```powershell
Get-Command rpath.exe
```

## `cannot emit shell commands because the environment plan contains errors`

Emit-Modus verweigert Änderungen, wenn der Plan harte Fehler enthält. Das passiert häufig mit `--strict`.

Zuerst prüfen:

```sh
rpath doctor --strict
rpath repair
```

Dann den eigentlichen Eintrag beheben oder einen reparierten Plan anwenden:

```sh
rpath repair --emit
```

## Fehlende oder ungültige PATH-Einträge

Führe aus:

```sh
rpath doctor
rpath doctor --json
```

`missing-path` bedeutet, dass das expandierte Verzeichnis nicht existiert. `invalid-path` bedeutet, dass der Eintrag leer, nicht auflösbar oder im Reparaturmodus entfernt wurde. Entferne veraltete Einträge aus der persistenten Quelle oder nutze `repair` für die aktuelle Sitzung.

## Doppelte PATH-Einträge kommen zurück

`rpath` entfernt Duplikate im berechneten Plan standardmäßig, aber sie können zurückkommen, wenn Profil-Dateien oder Installer denselben Ordner immer wieder anhängen. Nutze:

```sh
rpath doctor
rpath diff
```

Bereinige danach die persistente Quelle, die das Duplikat hinzufügt.

## Profil-Sourcing läuft ab oder ist noisy

`profile-source-failed` bedeutet, dass rpath keine sichere Child-Shell-Umgebung erfassen konnte. rpath fällt auf Datei-Parsing und aktuelle Umgebungsdaten zurück. Prüfe Shell-Startdateien auf Befehle, die blockieren, Prompts ausgeben oder interaktive Eingabe erwarten.

## Snapshot oder Version nicht gefunden

Liste verfügbare IDs:

```sh
rpath snapshot list
rpath version list
```

Snapshots und Versionen liegen im Plattform-Datenverzeichnis unter `rpath`. Sie sind lokal für Benutzerkonto und Maschine.

## Explorer-Integration ist unsupported

`rpath integrate explorer ...` funktioniert nur unter Windows. Unter Linux und macOS meldet der Befehl `supported: false`.

## WSL-Sync-Helfer macht nichts

Der WSL-Befehl schreibt ein Helferskript in den rpath-State. Er editiert nicht automatisch jede WSL-Distribution. Source das generierte Skript aus deiner WSL-Startdatei und prüfe, dass `powershell.exe` aus WSL erreichbar ist.

## Git Bash aktualisiert weiterhin nicht

Git Bash nutzt den bash-Wrapper. Führe aus:

```sh
rpath integrate git-bash status
rpath init --shell bash
```

Prüfe, dass `~/.bashrc` den rpath-Block enthält und dass neue Git-Bash-Fenster diese Datei laden.
