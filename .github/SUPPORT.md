# Support

Need help with rpath or the documentation site?

## Channels

| Topic | Where | Notes |
| --- | --- | --- |
| Usage questions | GitHub Issues | Search existing issues first. |
| Shell or platform bugs | GitHub Issues | Include shell, OS, and reproduction steps. |
| Security concerns | Private email from the root security policy | Do not open a public issue for vulnerabilities. |
| Feature requests | GitHub Issues | Include motivation and alternatives considered. |
| Documentation gaps | Pull request or issue | Include the affected page and expected wording. |

## Before opening an issue

Run:

```bash
rpath doctor --json
rpath diff --json
rpath --version
```

For docs build problems, also include:

```bash
bun run build
```

## Security reports

Use the private reporting process described in the root repository:

- https://github.com/rpathdev/rpath/blob/main/SECURITY.md
