"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class underyanserver {
    constructor() {
        this._command = "underyanserver";
    }
    help() {
        return "The invite link to the UndeRyan server.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete(0);
        msgObject.channel.sendFile("https://cdn.discordapp.com/attachments/532701026042511362/582253044427915264/1.png");
        msgObject.channel.sendFile("https://cdn.discordapp.com/attachments/532701026042511362/582253262665809930/2.gif");
        msgObject.channel.send("https://discord.gg/Csmp2EH");
    }
}
exports.default = underyanserver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5kZXJ5YW5zZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvdW5kZXJ5YW5zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixjQUFjO0lBQW5DO1FBRXFCLGFBQVEsR0FBRyxnQkFBZ0IsQ0FBQTtJQW1CNUMsQ0FBQztJQWhCRCxJQUFJO1FBRUEsT0FBTyx5Q0FBeUMsQ0FBQztJQUNyRCxDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsb0ZBQW9GLENBQUMsQ0FBQztRQUNqSCxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDO1FBQ2pILFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNKO0FBckJMLGlDQXFCSyJ9