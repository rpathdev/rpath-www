---
title: Shell Wrappers
description: How rpath updates a live shell session.
---

# Shell Wrappers

`rpath` needs a wrapper because environment variables flow from parent process to child process. A child CLI can print commands, but it cannot directly change the already-running parent shell.

## What `rpath install` writes

| Shell | Target |
| --- | --- |
| Windows PowerShell | `~/Documents/WindowsPowerShell/Microsoft.PowerShell_profile.ps1` |
| PowerShell Core | `~/Documents/PowerShell/Microsoft.PowerShell_profile.ps1` |
| bash | `~/.bashrc` |
| zsh | `~/.zshrc` |
| fish | `~/.config/fish/config.fish` |
| cmd | platform data directory `rpath/cmd-init.cmd` plus HKCU Command Processor AutoRun attempt |

Profile files are backed up before rpath replaces its marked block.

## Wrapper behavior

When called without arguments, the wrapper evaluates:

```sh
rpath --emit --shell <shell>
```

When called with arguments, it delegates to the binary:

```sh
rpath doctor
rpath snapshot list
rpath integrate vscode status
```

This keeps inspection commands normal while making bare `rpath` refresh the active session.

## Inspect the snippet

```sh
rpath init --shell bash
rpath init --shell fish
```

```powershell
rpath init --shell pwsh
```

Use `init` when you want to review or place the wrapper manually.

## Uninstall

```sh
rpath uninstall
rpath uninstall --all
```

Uninstall removes only rpath's marked block or wrapper file. It leaves unrelated profile content in place.

To remove the hosted-install binary and PATH entry too, use the [Uninstall](./uninstall) guide.
