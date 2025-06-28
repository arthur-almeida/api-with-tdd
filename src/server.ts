import setupApp from "./app.ts";

try {
  const app = await setupApp();
  const port = 3000;
  const server = app.listen(port, () => {
    console.info(`App running`);
  });
  const exitSignals = ["SIGINT", "SIGTERM", "SIGQUIT"];
  exitSignals.map((signal) => {
    process.on(signal, () => {
      server.close((error) => {
        if (error) {
          console.error(error);
          process.exit(1);
        }
        app.database?.close().then(() => {
          console.info("\nDatabase connection closed");
          process.exit(0);
        });
      });
    });
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
