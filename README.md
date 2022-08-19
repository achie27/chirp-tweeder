Tweeder is hosted [here](https://chirp-tweeder.vercel.app/) and as a project on Devpost [here](https://devpost.com/software/tweeder)

## Local app setup
### Prerequisites
- Client ID and secret from the app created on Twitter developer portal. The app should be of type `web app` and have OAuth 2 configured.
- Node.js 16+ and yarn installed.

### Dependencies
- Install package dependencies with
  ```bash
  yarn
  ```
- Copy `.env.sample` to create a `.env.local` file and add your secrets/configs there.

### Running
- Do either
  - ```
    yarn build && yarn start
    ```
    to run a *production quality* build, or
  - ```
    yarn dev
    ``` 
    to run a development build with hot reloading