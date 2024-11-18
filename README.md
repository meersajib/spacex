# SpaceX Frontend Application

This project is a frontend application built using **SvelteKit**, **Flowbite**, and **OpenLayers**. It provides dynamic, interactive features like maps, charts, and tables for SpaceX data.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

---

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/meersajib/spacex
cd spacex
```


### 2. Install Dependencies

Run the following command to install all required dependencies:

bash
Copy code

```bash
npm install
```
This will install the necessary dependencies defined in the package.json file.

### 3. Run the Development Server
Start the local development server:

```bash
npm run dev
```
The application will be accessible at http://localhost:5173

---

# Build and Deployment
### 1. Build the Project
To generate the production build, use:

```bash
npm run build
```

The production files will be output to the build directory.

### 2. Preview the Build
To preview the production build locally:

```bash
npm run preview
```
This will simulate the production environment locally, allowing you to verify the build.

### 3. Deploy with Vercel
This project is configured for Vercel deployment:

#### 1. Ensure you have the Vercel CLI installed:

```bash
npm install -g vercel
```
#### 2. Deploy the project:

```bash
vercel
```

#### 3. Follow the prompts in the terminal to complete the deployment.
After deployment, Vercel will provide you with a live URL for the app.

---

# Tailwind CSS Configuration
This project uses Tailwind CSS for styling. The configuration can be found in tailwind.config.js. To customize, edit this file and restart the development server.

