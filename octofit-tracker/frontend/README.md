# OctoFit Tracker Frontend

React 19 presentation tier for the OctoFit Tracker multi-tier application.

## API URL configuration

Define `VITE_CODESPACE_NAME` when running the frontend in GitHub Codespaces, for example in `.env.local`:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is set, API calls use:

```text
https://$VITE_CODESPACE_NAME-8000.app.github.dev
```

When it is unset, the app safely falls back to `http://localhost:8000`.
