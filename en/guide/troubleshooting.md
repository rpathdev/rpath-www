---
title: Troubleshooting
description: Fix common rpath setup, wrapper, diagnostic, and integration problems.
---

# Troubleshooting

Start with:

```sh
rpath doctor --verbose
rpath diff
rpath --version
```

Use `--json` when attaching output to an issue.

## `rpath` prints a plan but PATH does not change

The binary is running directly. A child process cannot mutate the parent shell.

Fix:

```sh
rpath install
```

Restart the shell. For manual use, evaluate emit output:

```sh
eval "$(rpath --emit --shell bash)"
```

## PowerShell will not load the profile

If PowerShell reports an execution-policy error, inspect policies:

```powershell
Get-ExecutionPolicy -List
```

For a normal per-user setup:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Restart PowerShell after changing the policy.

## `rpath.exe was not found on PATH`

The wrapper loaded, but the binary is not discoverable. Add the directory containing `rpath.exe` to your persistent user PATH, or move the binary into an existing PATH directory. Open a new shell and run:

```powershell
Get-Command rpath.exe
```

## `cannot emit shell commands because the environment plan contains errors`

Emit mode refuses to mutate the session when the plan has hard errors. This commonly happens with `--strict`.

Inspect first:

```sh
rpath doctor --strict
rpath repair
```

Then decide whether to fix the underlying entry or apply a repaired plan:

```sh
rpath repair --emit
```

## Missing or invalid PATH entries

Run:

```sh
rpath doctor
rpath doctor --json
```

`missing-path` means the expanded directory does not exist. `invalid-path` means the entry is empty, unresolved, or removed by repair mode. Remove stale entries from your persistent environment source, or use `repair` for the current session.

## Duplicate PATH entries keep appearing

`rpath` removes duplicates in the computed plan by default, but duplicates may return if profile files or installers keep appending the same directory. Use:

```sh
rpath doctor
rpath diff
```

Then clean the persistent source that is adding the duplicate.

## Profile sourcing timed out or was noisy

`profile-source-failed` means rpath could not safely capture a child shell environment. rpath falls back to file parsing and current environment data. Check shell startup files for commands that block, print prompts, or require interactive input.

## Snapshot or version not found

List available ids:

```sh
rpath snapshot list
rpath version list
```

Snapshots and versions are stored in the platform data directory under `rpath`. They are local to the user account and machine.

## Explorer integration is unsupported

`rpath integrate explorer ...` works only on Windows. On Linux and macOS it reports `supported: false`.

## WSL sync helper does nothing

The WSL command writes a helper script into rpath state. It does not automatically edit every WSL distribution. Source the generated script from your WSL shell startup file and verify that `powershell.exe` is available from WSL.

## Git Bash still does not refresh

Git Bash uses the bash wrapper. Run:

```sh
rpath integrate git-bash status
rpath init --shell bash
```

Confirm that `~/.bashrc` contains the rpath marked block and that new Git Bash windows load it.
