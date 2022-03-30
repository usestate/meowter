// Move app's entrypoint into separate chunk to avoid undefined config
const start = () => {
  fetch(process.env.CONFIG_PATH)
    .then(res => res.json())
    .then(data => {
      // @ts-ignore
      window.runtimeConfig = data;
    })
    .then(() => import('./bootstrap'));
};

start();
