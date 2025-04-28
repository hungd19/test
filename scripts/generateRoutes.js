import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Get current file directory with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to install dependencies
async function installDependencies() {
  console.log('Checking and installing dependencies...');
  
  try {
    // Check if package.json exists
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    const dependencies = packageJson.dependencies || {};
    const depsToInstall = [];
    
    // Check if react-router-dom is installed
    if (!dependencies['react-router-dom']) {
      depsToInstall.push('react-router-dom');
    }
    
    // Check if fs is installed
    if (!dependencies['fs']) {
      depsToInstall.push('fs');
    }
    
    // Install missing dependencies
    if (depsToInstall.length > 0) {
      console.log(`Installing missing dependencies: ${depsToInstall.join(', ')}`);
      const { stdout, stderr } = await execAsync(`npm install ${depsToInstall.join(' ')}`);
      console.log('Installation output:', stdout);
      if (stderr) console.error('Installation errors:', stderr);
    } else {
      console.log('All required dependencies are already installed.');
    }
  } catch (error) {
    console.error('Error installing dependencies:', error);
    throw error;
  }
}

// Read the plasmic.json file
const plasmicJsonPath = path.join(__dirname, '..', 'plasmic.json');
const plasmicJson = JSON.parse(fs.readFileSync(plasmicJsonPath, 'utf8'));

// Function to extract the component name from renderModuleFilePath
function extractComponentName(renderModuleFilePath) {
  const parts = renderModuleFilePath.split('/');
  const filename = parts[parts.length - 1];
  // Remove the extension and "Plasmic" prefix
  return filename.replace(/\.tsx$/, '').replace(/^Plasmic/, '');
}

// Step 1: Extract routes from plasmic.json
function extractRoutes() {
  const routes = [];

  // Process all projects in the plasmic.json file
  plasmicJson.projects.forEach(project => {
    if (project.components) {
      project.components.forEach(component => {
        // Check if the component is a page with a path
        if (component.componentType === 'page' && component.path) {
          routes.push({
            path: component.path,
            componentName: component.name,
            importPath: extractComponentName(component.renderModuleFilePath),
            modulePath: component.importSpec?.modulePath || `${component.name}.tsx`
          });
        }
      });
    }
  });

  return routes;
}

// Step 2: Generate routing code
function generateRoutingCode(routes) {
  // Generate import statements
  const imports = routes.map(route => 
    `import ${route.componentName} from "./components/${route.modulePath}";`
  ).join('\n');

  // Generate route elements
  const routeElements = routes.map(route => 
    `        <Route path="${route.path}" element={<${route.componentName} />} />`
  ).join('\n');

  // Generate the complete App.tsx code
  const appCode = `import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
${imports}

function App() {
  return (
    <Router>
      <Routes>
${routeElements}
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
`;

  return appCode;
}

// Main function
async function main() {
  try {
    // Step 0: Install required dependencies
    await installDependencies();
    
    // Step 1 & 2: Extract routes and generate code
    const routes = extractRoutes();
    const routingCode = generateRoutingCode(routes);
    
    console.log('Extracted routes:');
    console.log(JSON.stringify(routes, null, 2));
    
    console.log('\nGenerated routing code:');
    console.log(routingCode);
    
    // Write the generated code to App.tsx
    const appPath = path.join(__dirname, '..', 'src', 'App.tsx');
    fs.writeFileSync(appPath, routingCode);
    console.log(`\nRouting code has been written to: ${appPath}`);
    
    console.log('\nSetup complete! Your routing is now configured with all Plasmic pages.');
  } catch (error) {
    console.error('Error in route generation process:', error);
    process.exit(1);
  }
}

main();
