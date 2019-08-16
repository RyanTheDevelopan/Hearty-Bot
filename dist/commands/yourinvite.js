"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "testCommand";
    }
    help() {
        return "A useful command";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.channel.send("https://cdn.discordapp.com/attachments/532701026042511362/578367731448152095/undertale_text_box.gif");
        msgObject.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=578319689764306945&permissions=8&scope=bot");
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91cmludml0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy95b3VyaW52aXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBcUIsV0FBVztJQUFoQztRQUVxQixhQUFRLEdBQUcsYUFBYSxDQUFBO0lBaUJ6QyxDQUFDO0lBZEQsSUFBSTtRQUVBLE9BQU8sa0JBQWtCLENBQUM7SUFDOUIsQ0FBQztJQUVHLGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUd6RSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxR0FBcUcsQ0FBQyxDQUFDO1FBQzlILFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtHQUFrRyxDQUFDLENBQUM7SUFDL0gsQ0FBQztDQUNKO0FBbkJMLDhCQW1CSyJ9