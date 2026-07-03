---
title: PATH Planning
description: How rpath collects, validates, deduplicates, and repairs PATH entries.
---

# PATH Planning

`rpath` builds an `EnvironmentPlan`. The plan contains the detected shell, platform, variables, final PATH string, individual PATH entries, diagnostics, statistics, and generation time.

## Sources

Windows:

- Current process environment
- HKLM and HKCU PATH registry values
- Git for Windows and MSYS paths when present
- Critical Windows paths preserved from the current PATH

Linux and macOS:

- Current process environment
- `/etc/environment` and `/etc/profile`
- `~/.profile`, `~/.bashrc`, `~/.zshrc`, and fish config
- Sandboxed child-shell environment capture with a short timeout
- Homebrew, Nix, Snap, Flatpak, and `~/.local/bin` paths when present
- Critical Unix paths preserved from the current PATH

## Normalization

`rpath` expands platform-style environment variables, trims quotes, validates missing paths, removes duplicates by default, and preserves critical system paths even when repair mode is requested.

On Windows, duplicate detection is case-insensitive and ignores trailing slashes. On Unix-like systems, duplicate detection is case-sensitive and ignores trailing slashes.

## Diagnostics

| Code | Meaning |
| --- | --- |
| `missing-path` | The expanded entry does not exist on disk. |
| `invalid-path` | The entry is empty, unresolved, or removed by repair mode. |
| `duplicate-path` | `doctor` found a repeated PATH entry. |
| `registry-read-failed` | Windows registry PATH could not be queried. |
| `profile-read-failed` | A profile-like file could not be read. |
| `profile-source-failed` | Sandboxed shell capture timed out or failed. |
| `world-writable-path` | `doctor --security` found a Unix PATH entry writable by other users. |
| `empty-path-plan` | rpath refused to produce an empty PATH plan. |

## Strict mode

```sh
rpath doctor --strict
rpath --emit --strict
```

`--strict` upgrades missing paths to errors. Emitters refuse to output mutation commands when the plan contains errors.

## Repair mode

```sh
rpath repair
rpath repair --emit
```

`repair` builds a plan with invalid entries removed. Use `repair` to inspect the cleaned plan, then use `repair --emit` through a wrapper or manual emit command when you want to apply it to the current session.
