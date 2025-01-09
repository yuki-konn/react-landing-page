export function getServerResponse(resolve) {
  debugger;
  setTimeout(activateResolve, 5000);
  function activateResolve() {
    const response = {
      message: `
      <b style='color: green'>YOUR INFORMATION HAS BEEN SUBMITTED</b>
      <br>
      <p class="text-success">You have received a discount code: 
      <span class="badge badge-pill badge-info">KETTLE2025</span>
      </p>`,
    };
    const resolveValue = JSON.stringify(response);
    resolve(resolveValue);
  }
}
