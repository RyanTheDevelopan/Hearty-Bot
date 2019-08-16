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
        msgObject.channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=Congrats%2C%20I%20work!&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2Fh5JTumC.png&charcolor=white&font=determination&asterisk=true&mode=regular.png");
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvdGVzdENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxhQUFhLENBQUE7SUFnQnpDLENBQUM7SUFiRCxJQUFJO1FBRUEsT0FBTyxrQkFBa0IsQ0FBQztJQUM5QixDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLDRPQUE0TyxDQUFDLENBQUM7SUFDN1EsQ0FBQztDQUNKO0FBbEJMLDhCQWtCSyJ9