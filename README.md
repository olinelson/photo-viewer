# Get started

1. install packages using `yarn`
2. Run development server using `yarn start`

This app requires an Unsplash API account. You can get the required API keys [here](https://unsplash.com/developers)

If you wish to deploy this app to Firebase, copy the properties from your firebase config and and add them to a .env file in the root directory. An example .env conent is provided below:

```
#unsplash credentials
REACT_APP_UNSPLASH_ACCESS_KEY=A-12345678
REACT_APP_UNSPLASH_SECRET_KEY=ABCDEFG

#firebase credentials
REACT_APP_API_KEY=ABCDEFG
REACT_APP_AUTH_DOMAIN=photo-viewer-12345
DATABASE_URL=https://photo-viewer.app.com
PROJECT_ID=photo-viewer-1234
REACT_APP_STORAGE_BUCKET=photo-viewer-1234.appspot.com
REACT_APP_MESSAGING_SENDER_ID=12345678
REACT_APP_APP_ID=1:XXXXX:web:XXXXXX
REACT_APP_MEASUREMENT_ID=G-XXXXXXXXX

```

Credits:
This app was bootstraped using the antd create-react-app starter. You can find the repo [here](https://github.com/ant-design/create-react-app-antd)
