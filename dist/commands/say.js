"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class say {
    constructor() {
        this._command = "say";
    }
    help() {
        return "A useful command";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
    }
}
exports.default = say;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3NheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLE1BQXFCLEdBQUc7SUFBeEI7UUFFcUIsYUFBUSxHQUFHLEtBQUssQ0FBQTtJQWdCakMsQ0FBQztJQWJELElBQUk7UUFFQSxPQUFPLGtCQUFrQixDQUFDO0lBQzlCLENBQUM7SUFFRyxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7SUFJN0UsQ0FBQztDQUNKO0FBbEJMLHNCQWtCSyJ9