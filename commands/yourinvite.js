"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class botlink {
    constructor() {
        this._command = "botlink";
    }
    help() {
        return "A useful command";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=Oh%2C%20here%20you%20go.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FQYJgxpG.png&charcolor=white&font=determination&asterisk=true&mode=regular.png");
        msgObject.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=578319689764306945&permissions=8&scope=bot");
    }
}
exports.default = botlink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91cmludml0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy95b3VyaW52aXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBcUIsT0FBTztJQUE1QjtRQUVxQixhQUFRLEdBQUcsU0FBUyxDQUFBO0lBaUJyQyxDQUFDO0lBZEQsSUFBSTtRQUVBLE9BQU8sa0JBQWtCLENBQUM7SUFDOUIsQ0FBQztJQUVHLGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUd6RSxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyw2T0FBNk8sQ0FBQyxDQUFDO1FBQzFRLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtHQUFrRyxDQUFDLENBQUM7SUFDL0gsQ0FBQztDQUNKO0FBbkJMLDBCQW1CSyJ9