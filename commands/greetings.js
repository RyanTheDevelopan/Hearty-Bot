"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class greetings {
    constructor() {
        this._command = "greetings";
    }
    help() {
        return "A useful command";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        var greetings = [
            "https://demirramon.com/gen/undertale_text_box.png?text=Oh%2C%20hello%20there!&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FSEwdTjs.png&charcolor=white&font=determination&asterisk=true&mode=regular.png",
            "https://demirramon.com/gen/undertale_text_box.png?text=oh%2C%20hey%20there%2C%20kiddo.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FPXmUvwH.png&charcolor=white&font=sans&asterisk=true&mode=regular.png",
            `https://demirramon.com/gen/undertale_text_box.png?text=Hi%20there%2C%20${msgObject.member.toString()}.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FCCeYe7H.png&charcolor=white&font=determination&asterisk=true&mode=regular.png`,
            "https://demirramon.com/gen/undertale_text_box.png?text=Oh%2C%20hello%20there%2C%20don%27t%20mind%20me%2C%20just%20getting%20back%20to%20Tubba.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FSnEs3zB.png&charcolor=white&font=earthbound&asterisk=true&mode=regular.png"
        ];
        if (args[1])
            msgObject.channel.send(greetings[Math.floor(Math.random() * greetings.length)]);
        else
            msgObject.channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=color%3Dyellow%20Hearty%235202%20color%3Dwhite%20isn%27t%20available%20right%20now.%20Sorry%20for%20the%20inconvenience.&box=undertale&boxcolor=white&charcolor=white&font=determination&asterisk=true&mode=regular.png");
    }
}
exports.default = greetings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZXRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2dyZWV0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQXFCLFNBQVM7SUFBOUI7UUFFcUIsYUFBUSxHQUFHLFdBQVcsQ0FBQTtJQXVCdkMsQ0FBQztJQXBCRCxJQUFJO1FBRUEsT0FBTyxrQkFBa0IsQ0FBQztJQUM5QixDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLElBQUksU0FBUyxHQUFHO1lBQ1osMk9BQTJPO1lBQzNPLDJPQUEyTztZQUMzTywwRUFBMEUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsK0pBQStKO1lBQ3BRLHlTQUF5UztTQUM1UyxDQUFDO1FBQ0YsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ3hGLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdSQUFnUixDQUFDLENBQUM7SUFDdFQsQ0FBQztDQUNKO0FBekJMLDRCQXlCSyJ9