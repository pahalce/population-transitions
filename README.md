# Population Transitions

[Population Transitions](https://population-transitions.vercel.app/) is a project to illustrate the population change of Japan.

## Getting Started

### Environment Variables

API : [RESAS API](https://opendata.resas-portal.go.jp/)

```
NEXT_PUBLIC_API_KEY={FILL_ME_IN}
```

### Run the development server:

```bash
npm install
npm run dev
```

## Project Structure

- Styling:

  - vanilla css -> lives in styles/

- API & Data fetching:
  - [axios](https://github.com/axios/axios) + [React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)
    -> see lib/

### Component Structure

```sh
├── components/
│ ├── common/  # common components of the app
│ ├── feature/ # components scoped to a specific feature
│ └── layout/ # layout components, header
└── config/
└── hooks/
└── lib/
└── pages/
└── public/
└── stores/
└── styles/
└── types/
```

## Credits

[RESAS API](https://opendata.resas-portal.go.jp/)
