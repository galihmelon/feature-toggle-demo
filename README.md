This is a repo to demo a way to do feature toggling on a React app that is served by an Express server.

Running in `local` environment:
```
# Run backend
cd backendForFrontend
node index.js

# Run frontend
cd ../frontend
npm start
```

To see feature toggle configuration:
http://localhost:5432/featureToggles

To see UI component under feature toggles:
http://localhost:3000

More info in https://dianinggalihyudono.wordpress.com/2019/01/06/feature-toggles-on-a-react-express-app/