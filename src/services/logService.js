// import * as Sentry from "@sentry/browser";

// function init() {
//   Sentry.init({
//     dsn: "https://293c44045c414b89a52384ef59889bd5@sentry.io/1775960"
//   });
// }

function log(error) {
  console.error(error);
  // Sentry.captureException(error);
}

export default {
  // init,
  log
};
