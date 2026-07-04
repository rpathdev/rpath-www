---
title: Uninstall
description: Remove rpath shell wrappers, binaries, PATH entries, and local state.
---

# Uninstall

`rpath uninstall` removes shell wrappers only. Use the hosted uninstall script when you want to remove the installed binary and the PATH entry created by the hosted installer.

## Hosted uninstall scripts

::: code-group

```powershell [Windows PowerShell]
irm https://get.rpath.dev/uninstall.ps1 | iex
```

```sh [Linux/macOS]
curl -fsSL https://get.rpath.dev/uninstall.sh | sh
```

:::

The scripts ask whether to remove the shell wrapper for the detected shell. They remove the user-local binary, undo the installer PATH entry, and remove install metadata.

## Remove shell wrappers only

```sh
rpath uninstall
rpath uninstall --all
```

This removes only rpath's marked shell profile block or `cmd` wrapper file. It does not delete the `rpath` binary.

## Keep or purge state

Normal uninstall keeps snapshots, automatic versions, and other local state. To remove that state too:

::: code-group

```powershell [Windows PowerShell]
& ([scriptblock]::Create((irm https://get.rpath.dev/uninstall.ps1))) -Purge
```

```sh [Linux/macOS]
curl -fsSL https://get.rpath.dev/uninstall.sh | sh -s -- --purge
```

:::

Use `--dry-run` or `-DryRun` to preview the changes.
