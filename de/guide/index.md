---
title: Anleitung
description: Lerne, wie rpath PATH und Umgebungszustand aktualisiert.
---

# Anleitung

`rpath` aktualisiert PATH für die Shell, die bereits geöffnet ist. Es erstellt einen Umgebungsplan, diagnostiziert Probleme und gibt Shell-spezifische Befehle aus, die von einem kleinen Wrapper ausgewertet werden können.

## Empfohlener Weg

1. [rpath installieren](./installation).
2. Den [Schnellstart](./quick-start) für deine Shell ausführen.
3. [Shell-Wrapper](./shell-wrappers) lesen, wenn eine Sitzung nur einen Plan ausgibt, aber PATH nicht ändert.
4. Mit [PATH-Planung](./path-planning) verstehen, wo Einträge herkommen.
5. [Fehlerbehebung](./troubleshooting) nutzen, wenn `doctor`, Profil-Laden oder Integrationen Warnungen melden.

## Was rpath verwaltet

| Bereich | Seite |
| --- | --- |
| Einrichtung | [Installation](./installation), [Schnellstart](./quick-start) |
| Shell-Verhalten | [Shell-Wrapper](./shell-wrappers) |
| Diagnose und Reparatur | [PATH-Planung](./path-planning), [Fehlerbehebung](./troubleshooting) |
| Rollback | [Snapshots & Versionen](./snapshots-and-versions) |
| Lokale Werkzeuge | [Integrationen](./integrations) |
| Automatisierung | [Befehlsreferenz](/de/reference/commands), [JSON-Ausgabe](/de/reference/json) |

## Sicherheitsmodell

`rpath` verändert beim Refresh keine systemweiten Umgebungsvariablen. Es berechnet einen Plan und gibt Befehle für die gewählte Shell aus. Persistente Schreibvorgänge passieren nur bei expliziten Befehlen wie `install`, `uninstall`, `snapshot`, `watch --install-service` oder `integrate ... install`.

Profil-Installer erstellen Backups, bevor sie Shell-Profile bearbeiten. Emit-Modus gibt keine Mutationsbefehle aus, wenn der Plan harte Fehler enthält.
