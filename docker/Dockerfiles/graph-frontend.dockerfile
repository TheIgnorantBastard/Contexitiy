# Use a lightweight Node image (you can switch to a more complete image if needed)
FROM node:18-alpine

WORKDIR /app

# Copy only package.json and package-lock.json (or yarn.lock) to leverage caching
COPY package*.json ./

# Install dependencies fresh in the Linux container
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port (adjust if necessary)
EXPOSE 5173

# Start the application (adjust as needed)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
