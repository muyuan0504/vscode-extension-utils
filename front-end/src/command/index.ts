/** 
 * VS Code 包含大量内置命令，可用于与编辑器交互、控制用户界面或执行后台操作。许多扩展还将其核心功能公开为用户和其他扩展可以利用的命令
 * 
 * API：
 * vscode.commands.registerCommand(ID, Callback) 将命令 ID 绑定到扩展中的处理函数：
 * vscode.commands.executeCommand：以编程的方式执行命令,可以使用 VS Code 的内置功能，并基于 VS Code 的内置 Git 和 Markdown 扩展等扩展进行构建
 * 
 * 配置：
 * package.json -> contributes.commands 需要配置命令的title以及映射到绑定的这个文件申明的命令
 * 
 */

import * as vscode from 'vscode';

// The command has been defined in the package.json file
// Now provide the implementation of the command with registerCommand
// The commandId parameter must match the command field in package.json
export function setCmdHello() {
    const cmdId = 'front-end.helloWorld'
    const cmdHandler = () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World from vscode-extension-utils!');
        /** 以代码形式执行命令 */
        vscode.commands.executeCommand("front-end.muyuan")
    }
    return vscode.commands.registerCommand(cmdId, cmdHandler);
}

export function setCmdMu() {
    const cmdId = 'front-end.muyuan'
    const cmdHandler = () => {
        vscode.window.showInformationMessage('0504, _____❤_____')
    }
    return vscode.commands.registerCommand(cmdId, cmdHandler);
}


export const cmdSetFnList = [setCmdHello, setCmdMu]