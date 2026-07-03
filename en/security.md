---
title: Security
description: rpath security model and vulnerability reporting.
---

# Security

`rpath` works with shell profiles, PATH, registry values, service definitions, and emitted commands. Treat changes to those surfaces carefully.

## Security principles

- No runtime network calls.
- No system-wide environment mutation during refresh.
- No shell commands emitted when the environment plan has hard errors.
- Profile files are backed up before wrapper installation changes them.
- Registry and service integrations stay under user scope where possible.

## What refresh does not do

Bare refresh does not write to system PATH, machine registry keys, package-manager config, or shell startup files. It computes a plan and emits commands for the current shell.

Persistent writes happen only when you explicitly use commands such as:

```sh
rpath install
rpath uninstall
rpath snapshot save
rpath watch --install-service
rpath integrate explorer install
```

Use `--dry-run` to preview supported writes.

## PATH risk checks

```sh
rpath doctor --security
```

Security diagnostics currently include simple checks such as world-writable Unix PATH entries. Also inspect unusual PATH ordering manually. A writable directory before trusted system directories can allow command shadowing.

## Reporting vulnerabilities

Please report suspected vulnerabilities privately to:

```text
me@byjonas.dev
```

Do not open a public issue for vulnerabilities involving shell injection, profile writing, registry edits, PATH hijacking, or unsafe environment mutation.

Include:

- Affected platform and shell
- `rpath --version`
- Reproduction steps
- Expected and actual behavior
- Whether the issue requires local access

Security fixes target the latest released version of `rpath`.
