let messagesGone = ["Open window alert 💨", "Bye then 😌", "Launch me again 🚀", "See ya later 👋"];
let original;

export function changeDocumentTitle() {
    const windowIsFocused = document.hasFocus();

    if (windowIsFocused === true) {
        document.title = original;
    } else {
        let title = document.title;
        let choosenMessage = messagesGone[Math.floor(Math.random() * messagesGone.length)];
        if (title !== choosenMessage) {
            original = title;
        }
        document.title = choosenMessage;
    }
}
