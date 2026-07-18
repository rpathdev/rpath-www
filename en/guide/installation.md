---
title: Installation
description: Install rpath from scripts, release artifacts, or source.
---

# Installation

`rpath` is a single Rust CLI named `rpath` (`rpath.exe` on Windows). The hosted installer places it in a user-local directory, verifies the GitHub Release checksum, and asks whether to install the shell wrapper for the detected shell.

## Installer scripts

Use the hosted installer:

::: code-group

```powershell [Windows PowerShell]
irm https://get.rpath.dev/install.ps1 | iex
```

```sh [Linux/macOS]
curl -fsSL https://get.rpath.dev/install.sh | sh
```

:::

Then open a new terminal and check:

```sh
rpath --version
rpath doctor
```

Defaults:

| Platform | Install directory |
| --- | --- |
| Linux/macOS | `~/.local/bin` |
| Windows | `%LOCALAPPDATA%\Programs\rpath\bin` |

Use `--dry-run` or `-DryRun` to preview the install. Use `--wrappers no` or `-InstallWrappers no` to skip the wrapper prompt.

## Release artifacts

GitHub Releases package the compiled binary with `README.md`, `LICENSE`, and `CHANGELOG.md`.

| Platform | Artifact |
| --- | --- |
| Linux x64 | `rpath-linux-x86_64.tar.gz` |
| Linux arm64 | `rpath-linux-aarch64.tar.gz` |
| macOS Intel | `rpath-macos-x86_64.tar.gz` |
| macOS Apple Silicon | `rpath-macos-aarch64.tar.gz` |
| Windows x64 | `rpath-windows-x86_64.zip` |
| Windows arm64 | `rpath-windows-aarch64.zip` |

Download the archive for your platform, extract it, and place the binary somewhere already on `PATH`.

## Upgrade

```sh
rpath upgrade
rpath upgrade --check
```

`upgrade` explicitly uses the network to check the latest GitHub Release, verifies the release checksum, and replaces the current installed binary when a newer version is available.

## Build from source

```sh
git clone https://github.com/rpathdev/rpath.git
cd rpath
cargo build --release -p rpath
```

The binary is written to:

::: code-group

```powershell [Windows]
.\target\release\rpath.exe
```

```sh [Linux/macOS]
./target/release/rpath
```

:::

## Install the wrapper

Once the binary is discoverable:

```sh
rpath install
```

You can also target a shell explicitly:

```sh
rpath install --shell bash
rpath install --shell zsh
rpath install --shell fish
```

```powershell
rpath install --shell powershell
rpath install --shell pwsh
rpath install --shell cmd
```

Use `rpath install --all` to install all wrappers relevant to the current operating system.

## Verify the install

```sh
rpath doctor
rpath diff
rpath
```

If `rpath` prints a plan but PATH does not change, the binary is running directly and the shell wrapper is not loaded yet. Run `rpath install`, restart the shell, and try again.
