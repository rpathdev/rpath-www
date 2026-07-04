---
title: Deinstallation
description: rpath Shell-Wrapper, Binary, PATH-Eintrag und lokale Daten entfernen.
---

# Deinstallation

`rpath uninstall` entfernt nur Shell-Wrapper. Nutze das gehostete Uninstall-Skript, wenn du auch die installierte Binary und den PATH-Eintrag des Installers entfernen moechtest.

## Gehostete Uninstall-Skripte

::: code-group

```powershell [Windows PowerShell]
irm https://get.rpath.dev/uninstall.ps1 | iex
```

```sh [Linux/macOS]
curl -fsSL https://get.rpath.dev/uninstall.sh | sh
```

:::

Die Skripte fragen, ob der Shell-Wrapper fuer die erkannte Shell entfernt werden soll. Danach entfernen sie die benutzerlokale Binary, den Installer-PATH-Eintrag und die Installationsmetadaten.

## Nur Shell-Wrapper entfernen

```sh
rpath uninstall
rpath uninstall --all
```

Das entfernt nur den markierten rpath-Block im Shell-Profil oder die `cmd`-Wrapper-Datei. Die `rpath`-Binary bleibt installiert.

## Zustand behalten oder loeschen

Eine normale Deinstallation behaelt Snapshots, automatische Versionen und andere lokale Daten. Um diese Daten ebenfalls zu entfernen:

::: code-group

```powershell [Windows PowerShell]
& ([scriptblock]::Create((irm https://get.rpath.dev/uninstall.ps1))) -Purge
```

```sh [Linux/macOS]
curl -fsSL https://get.rpath.dev/uninstall.sh | sh -s -- --purge
```

:::

Nutze `--dry-run` oder `-DryRun`, um die Aenderungen vorab zu pruefen.
