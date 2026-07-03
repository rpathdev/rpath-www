---
title: Guides
description: Learn how rpath refreshes PATH and environment state.
---

# Guides

`rpath` refreshes PATH for the shell you already have open. It builds an environment plan, diagnoses problems, and emits shell-specific commands that can be evaluated by a tiny wrapper.

## Recommended path

1. [Install rpath](./installation).
2. Run [the quick start](./quick-start) for your shell.
3. Read [Shell Wrappers](./shell-wrappers) before debugging a session that prints a plan but does not change PATH.
4. Use [PATH Planning](./path-planning) to understand where entries come from.
5. Use [Troubleshooting](./troubleshooting) when `doctor`, profile loading, or integrations report warnings.

## What rpath manages

| Area | What to read |
| --- | --- |
| Setup | [Installation](./installation), [Quick Start](./quick-start) |
| Shell behavior | [Shell Wrappers](./shell-wrappers) |
| Diagnostics and repair | [PATH Planning](./path-planning), [Troubleshooting](./troubleshooting) |
| Rollback | [Snapshots & Versions](./snapshots-and-versions) |
| Local tooling | [Integrations](./integrations) |
| Automation | [Command Reference](/reference/commands), [JSON Output](/reference/json) |

## Safety model

`rpath` does not modify system-wide environment variables when you refresh. It computes a plan and prints commands for the selected shell. Persistent writes happen only for explicit commands such as `install`, `uninstall`, `snapshot`, `watch --install-service`, or `integrate ... install`.

Profile installers create backups before editing shell profile files. Emit mode refuses to print mutation commands when the plan contains hard errors.
