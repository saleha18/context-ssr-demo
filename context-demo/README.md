# Context API

- Context -> It will act like a store. It has the context (data, state etc.)
- Provider -> It will provide the context to consumers.
- Consumer -> Its a way of delivering the context to the components.

## Redux vs Context API

- Redux is a state management library but Context API is a delivery mechanism.

# SSR

- Next Js
- Client & Server projects (independently)
- Vite's SSR  (out of box)

## CSR vs SSR + Context

- CSR
    - HTML (empty)
    - JS Loads
    - API fetch
    - Context initialises
    - UI renders

- SSR + Context
    - Request
    - API fetch (server)
    - Context initialised
    - React Renders HTML
    - Browser Hydrates

# Common mistakes to avoid

- Fetching data/calling api on client after SSR
- Different initial states on client/server entry components. Both should receive same data or else there will be hydration issues.
- Server render state/data is not preserved by default
- hydrateRoot is not same as createRoot. hydrateRoot helps SSR to become interactive with React attaching events to existing HTML.
- In a Context API + SSR app, context should not fetch data -- it should receive data and SSR should decide when and how the data is loaded.



