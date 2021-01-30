#!bin/bash
npm start &
cd server
npm run start:dev &
cd ..
cd peer-server
npm start &
