"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class invite {
    constructor() {
        this._command = "invite";
    }
    help() {
        return "The invite to my and the other bot's server";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete(0);
        msgObject.channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=Oh%2C%20here%20you%20go.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FQYJgxpG.png&charcolor=white&font=determination&asterisk=true&mode=regular.png");
        msgObject.channel.send("https://discord.gg/XC4u5E6");
    }
}
exports.default = invite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2ludml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQXFCLE1BQU07SUFBM0I7UUFFcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQWtCcEMsQ0FBQztJQWZELElBQUk7UUFFQSxPQUFPLDZDQUE2QyxDQUFDO0lBQ3pELENBQUM7SUFFRyxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFHekUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyw2T0FBNk8sQ0FBQyxDQUFDO1FBQzFRLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNKO0FBcEJMLHlCQW9CSyJ9