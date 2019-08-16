"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class rouxlsinvite {
    constructor() {
        this._command = "rouxls'sinvite";
    }
    help() {
        return "The invite to my and the other bot's server";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete(0);
        msgObject.channel.send(`**INVITE LINK**:
https://discord.gg/XC4u5E6`);
    }
}
exports.default = rouxlsinvite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91eGxzJ3NpbnZpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcm91eGxzJ3NpbnZpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixZQUFZO0lBQWpDO1FBRXFCLGFBQVEsR0FBRyxnQkFBZ0IsQ0FBQTtJQWtCNUMsQ0FBQztJQWZELElBQUk7UUFFQSxPQUFPLDZDQUE2QyxDQUFDO0lBQ3pELENBQUM7SUFFRyxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFHekUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzsyQkFDUixDQUFDLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBcEJMLCtCQW9CSyJ9