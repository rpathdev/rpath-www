---
title: Quick Start
description: Refresh PATH in a live shell with rpath.
---

# Quick Start

The important detail is that a native child process cannot directly mutate its parent shell. `rpath install` adds a small shell function or `cmd` AutoRun wrapper so the bare command can evaluate `rpath --emit` in the current session.

## 1. Install the wrapper

```sh
rpath install
```

Restart the terminal once, or source your profile manually.

## 2. Refresh the current session

```sh
rpath
```

With the wrapper loaded, `rpath` quietly evaluates the emitted shell commands. Without the wrapper, it prints a plan and tells you how to use `--emit`.

## 3. Inspect the plan

```sh
rpath doctor
rpath diff
rpath print
```

`doctor` reports invalid, duplicate, missing, and optional security findings. `diff` compares the computed plan with the current PATH. `print` prints only the final PATH string.

## Manual emit mode

Use manual mode when you do not want rpath to edit a profile yet.

::: code-group

```powershell [PowerShell]
Invoke-Expression (& rpath --emit --shell pwsh)
```

```bat [cmd]
for /f "delims=" %i in ('rpath --emit --shell cmd') do @%i
```

```sh [bash/zsh]
eval "$(rpath --emit --shell bash)"
```

```fish [fish]
rpath --emit --shell fish | source
```

:::

## Common first checks

```sh
rpath doctor --json
rpath diff --json
rpath --version
```

These commands are useful in bug reports because they describe the computed plan without requiring profile files or screenshots.
