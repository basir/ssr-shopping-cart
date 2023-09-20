# Convert Regular CSR React App To SSR React App Using vite-pulign-ssr

1. open csr react app in vs code
2. open a new vs code window
3. open terminal and run:

   ```shell
   npm init vite-plugin-ssr@latest
   ```

4. copy components folder
5. copy index.css and data.js to pages/index folder
6. copy App component to pages/index folder
7. Edit PageShell.jsx to only render {children}
8. Edit index.page.jsx to render <App /> component
