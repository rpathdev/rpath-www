---
title: Snapshots & Versions
description: Save, compare, and restore PATH states.
---

# Snapshots & Versions

Snapshots and versions are JSON files stored under the platform data directory in a `rpath` folder. They contain the shell, platform, variables, PATH string, PATH entries, and a reason.

## Manual snapshots

```sh
rpath snapshot save "before node installer"
rpath snapshot list
rpath snapshot restore
rpath snapshot restore <id>
rpath snapshot delete <id>
```

If `snapshot restore` is called without an id, rpath uses the most recent snapshot.

## Automatic versions

Bare `rpath` saves a version after a successful non-dry-run plan build. Watch mode can also save versions when PATH changes.

```sh
rpath version list
rpath version diff <from> <to>
rpath version restore <id>
```

`version diff` reports added, removed, reordered, and unchanged entries between two tracked plans.

## Restore safely

Restore commands prepare an emit plan. To apply the restored PATH to the current shell, use emit mode through the wrapper:

```sh
rpath snapshot restore <id> --emit
rpath version restore <id> --emit
```

Without `--emit`, rpath prints a message describing what is ready to restore.

## Watch mode

```sh
rpath watch --once
rpath watch --interval 10
rpath watch --install-service
rpath watch --status
rpath watch --uninstall-service
```

On Windows, service installation attempts to create a user scheduled task named `rpath-watch`. On Linux, it writes a user systemd service definition. On macOS, it writes a LaunchAgent plist.
