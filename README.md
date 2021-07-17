# steps to run project on local

1. npm install
2. create database in mongodb with name "tesseractTechnicalAssessment"
3. Navigate to folder "/src/api/v1" and run "migrate-mongo up"
4. Run "npm run start -- --NODE_ENV=dev" from root.

# API endpoints

1. http://localhost:8080/api/v1/parking/registeredUsers
2. http://localhost:8080/api/v1/parking/occupiedParkingSlots
3. http://localhost:8080/api/v1/parking/availableParkingSlots