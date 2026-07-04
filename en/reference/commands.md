---
title: Commands
description: Complete rpath command and flag reference.
---

# Commands

```text
rpath [OPTIONS] [COMMAND]
```

Without a subcommand, rpath builds an environment plan. With the wrapper loaded, bare `rpath` applies the emitted plan to the current shell.

## Global options

| Option | Meaning |
| --- | --- |
| <code>--shell &lt;cmd&#124;powershell&#124;pwsh&#124;bash&#124;zsh&#124;fish&gt;</code> | Override shell detection. |
| `--json` | Print machine-readable JSON. |
| `--verbose` | Request more detailed output where supported. |
| `--dry-run` | Avoid persistent writes for commands that can write. |
| `--no-dedupe` | Keep duplicate PATH entries in the plan. |
| `--strict` | Treat missing paths as hard errors. |
| `--emit` | Print shell commands for the selected shell. |
| `-h`, `--help` | Print help. |
| `-V`, `--version` | Print version. |

## `rpath`

```sh
rpath
rpath --emit --shell bash
rpath --json
```

Builds the plan, saves an automatic version when not a dry run, and either prints a summary, JSON, or shell commands.

## `doctor`

```sh
rpath doctor
rpath doctor --security
rpath doctor --json
```

Diagnoses invalid, duplicate, missing, and optionally risky PATH entries. `--security` adds checks such as world-writable Unix PATH directories.

## `diff`

```sh
rpath diff
```

Shows added, removed, reordered, and unchanged PATH entries compared with the current process PATH.

## `print`

```sh
rpath print
rpath print --json
```

Prints only the computed PATH string.

## `repair`

```sh
rpath repair
rpath repair --emit
```

Builds a plan with invalid entries removed. Use `--emit` to apply the repaired plan through a wrapper or manual emit expression.

## `upgrade`

```sh
rpath upgrade
rpath upgrade --check
rpath upgrade --dry-run
rpath upgrade --json
```

Checks GitHub Releases for a newer rpath version. Without `--check`, it verifies the release checksum and replaces the current installed binary when an update is available.

## `snapshot`

```text
rpath snapshot save [reason]
rpath snapshot list
rpath snapshot restore [id]
rpath snapshot delete <id>
```

Saves, lists, restores, or deletes manual snapshots. If `restore` gets no id, it selects the most recent snapshot.

## `version`

```text
rpath version list
rpath version diff <from> <to>
rpath version restore <id>
```

Works with automatic environment versions saved by normal refreshes and watch mode.

## `install` and `uninstall`

```sh
rpath install
rpath install --all
rpath uninstall
rpath uninstall --all
```

Installs or removes shell wrappers. `--all` targets every shell relevant to the current operating system. Use the hosted uninstall scripts to remove the binary and installer PATH entry.

## `init`

```sh
rpath init
rpath init --shell fish
```

Prints the shell initialization snippet without writing it.

## `watch`

```text
rpath watch [--once] [--interval <seconds>]
rpath watch --install-service
rpath watch --uninstall-service
rpath watch --status
```

Polls for PATH changes and saves versions. Service installation uses a Windows scheduled task, a Linux user systemd service definition, or a macOS LaunchAgent plist.

## `integrate`

```text
rpath integrate <vscode|explorer|wsl|git-bash> <install|uninstall|status>
```

Installs, uninstalls, or inspects local integration helpers.
