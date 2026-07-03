---
title: Integrations
description: Use rpath with VS Code, Explorer, WSL, and Git Bash.
---

# Integrations

Integrations are local helpers. They do not change rpath's core planning model.

```sh
rpath integrate <target> <action>
```

Targets are `vscode`, `explorer`, `wsl`, and `git-bash`. Actions are `install`, `uninstall`, and `status`.

## VS Code

```sh
rpath integrate vscode install
rpath integrate vscode status
```

The VS Code integration installs the shell wrapper for the detected shell and writes an integration marker. Integrated terminals then use the same shell profile behavior as normal terminals.

## Windows Explorer

```powershell
rpath integrate explorer install
rpath integrate explorer status
```

Explorer integration is supported only on Windows. It attempts to add an HKCU context menu entry and broadcasts an environment-change marker. On Linux or macOS, status reports that Explorer integration is unsupported.

## WSL

```sh
rpath integrate wsl install
```

The WSL integration writes a sync helper script into rpath state. Source that script from WSL shell startup when you want to import an emitted Windows PATH shape.

## Git Bash

```sh
rpath integrate git-bash install
rpath integrate git-bash status
```

Git Bash uses the bash wrapper in `~/.bashrc`. If Git Bash still prints a plan instead of refreshing, open a new Git Bash window and confirm that `~/.bashrc` is being loaded.

## Dry runs

```sh
rpath integrate vscode install --dry-run
rpath watch --install-service --dry-run
```

Use `--dry-run` to see what rpath would change before writing files, registry entries, service definitions, or markers.
