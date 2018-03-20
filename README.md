## Example of bug in system-components 

To Reproduce:

Install deps

```
yarn
```

Start 

```
yarn dev
```

visit: http://localhost:3000

open your console and refresh

You should see an error like this

```main.js:4542 Warning: Prop `className` did not match. Server: "sc-ifAKCX dmspyV" Client: "sc-bdVaJa gdpUuC"```


visit: http://localhost:3000/works

you should see no error.
