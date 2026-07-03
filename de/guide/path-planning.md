---
title: PATH-Planung
description: Wie rpath PATH-Einträge sammelt, validiert, dedupliziert und repariert.
---

# PATH-Planung

`rpath` erstellt einen `EnvironmentPlan`. Der Plan enthält erkannte Shell, Plattform, Variablen, finalen PATH-String, einzelne PATH-Einträge, Diagnosen, Statistiken und Erstellungszeit.

## Quellen

Windows:

- Aktuelle Prozessumgebung
- HKLM- und HKCU-PATH-Werte aus der Registry
- Git-for-Windows- und MSYS-Pfade, wenn vorhanden
- Kritische Windows-Pfade aus dem aktuellen PATH

Linux und macOS:

- Aktuelle Prozessumgebung
- `/etc/environment` und `/etc/profile`
- `~/.profile`, `~/.bashrc`, `~/.zshrc` und fish-Konfiguration
- Isolierte Child-Shell-Erfassung mit kurzem Timeout
- Homebrew-, Nix-, Snap-, Flatpak- und `~/.local/bin`-Pfade, wenn vorhanden
- Kritische Unix-Pfade aus dem aktuellen PATH

## Normalisierung

`rpath` expandiert plattformtypische Umgebungsvariablen, entfernt äußere Anführungszeichen, validiert fehlende Pfade, entfernt doppelte Einträge standardmäßig und behält kritische Systempfade auch im Reparaturmodus.

Unter Windows ist Duplikaterkennung case-insensitive und ignoriert abschließende Slashes. Auf Unix-ähnlichen Systemen ist sie case-sensitive und ignoriert abschließende Slashes.

## Diagnosen

| Code | Bedeutung |
| --- | --- |
| `missing-path` | Der expandierte Eintrag existiert nicht auf der Platte. |
| `invalid-path` | Der Eintrag ist leer, nicht auflösbar oder wurde im Reparaturmodus entfernt. |
| `duplicate-path` | `doctor` hat einen wiederholten PATH-Eintrag gefunden. |
| `registry-read-failed` | Windows-Registry-PATH konnte nicht gelesen werden. |
| `profile-read-failed` | Eine Profil-ähnliche Datei konnte nicht gelesen werden. |
| `profile-source-failed` | Isolierte Shell-Erfassung ist fehlgeschlagen oder abgelaufen. |
| `world-writable-path` | `doctor --security` fand einen Unix-PATH-Eintrag, der für andere Benutzer schreibbar ist. |
| `empty-path-plan` | rpath hat verweigert, einen leeren PATH-Plan zu erzeugen. |

## Strict Mode

```sh
rpath doctor --strict
rpath --emit --strict
```

`--strict` macht fehlende Pfade zu Fehlern. Emitter geben keine Mutationsbefehle aus, wenn der Plan Fehler enthält.

## Reparaturmodus

```sh
rpath repair
rpath repair --emit
```

`repair` erstellt einen Plan, bei dem ungültige Einträge entfernt sind. Nutze `repair` zuerst zur Prüfung und danach `repair --emit` über einen Wrapper oder manuellen Emit-Befehl, wenn du den Plan auf die aktuelle Sitzung anwenden möchtest.
