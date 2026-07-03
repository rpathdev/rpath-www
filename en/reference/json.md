---
title: JSON Output
description: Machine-readable rpath output shapes.
---

# JSON Output

Most rpath commands accept `--json`. The JSON shapes are intended for local automation and diagnostics. They are still pre-1.0 and may change before the public schema is frozen.

## Environment plan

```sh
rpath --json
rpath repair --json
```

Important fields:

| Field | Meaning |
| --- | --- |
| `shell` | Detected or selected shell. |
| `platform` | Platform name such as `windows`, `linux`, or `macos`. |
| `variables` | Captured environment variables after PATH is replaced with the computed value. |
| `path` | Final PATH string. |
| `path_entries` | Expanded entries with source, validity, existence, critical, and duplicate flags. |
| `diagnostics` | Warnings and errors produced during collection and validation. |
| `stats` | Entry counts, duplicate removals, invalid entries, additions, and removals. |
| `generated_at_unix` | Unix timestamp for the plan. |

## Diagnostics

```sh
rpath doctor --json
rpath doctor --security --json
```

Each diagnostic has:

```json
{
  "severity": "warning",
  "code": "missing-path",
  "message": "PATH entry does not exist on disk",
  "path": "/missing/bin"
}
```

Severity values are `info`, `warning`, and `error`.

## Diff report

```sh
rpath diff --json
rpath version diff <from> <to> --json
```

```json
{
  "added": [],
  "removed": [],
  "reordered": [],
  "unchanged_count": 12
}
```

## Snapshots and versions

```sh
rpath snapshot list --json
rpath version list --json
```

Snapshot-like objects include `id`, `created_at_unix`, `shell`, `platform`, `variables`, `path`, `path_entries`, and `reason`.

## Emit plans

```sh
rpath snapshot restore <id> --json
rpath version restore <id> --json
```

Emit plans include the selected shell, command text, PATH string, and warnings.

## Integration reports

```sh
rpath integrate vscode status --json
rpath watch --status --json
```

Reports include:

| Field | Meaning |
| --- | --- |
| `target` | Integration target. |
| `action` | Requested action. |
| `changed` | Whether the command changed local state. |
| `supported` | Whether the target is supported on this platform. |
| `path` | Relevant marker, service, or wrapper path when available. |
| `message` | Human-readable status. |

## Automation tips

- Prefer `doctor --json`, `diff --json`, and `--version` in bug reports.
- Use `--dry-run --json` before install, uninstall, service, or integration commands.
- Do not parse human summary text when JSON output exists.
