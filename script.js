
document.querySelector("#message").addEventListener("keyup", () => {
    const secretMessage = document.querySelector("#message").value;
    console.log(secretMessage);

    document.querySelector("#odin").textContent = secretMessage;
    document.querySelector("#dva").textContent = secretMessage;
})