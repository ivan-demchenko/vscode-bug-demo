import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('bug-demo-ext.helloWorld', () => {
			vscode.window.withProgress({
				location: vscode.ProgressLocation.Notification,
				title: "Bug Demo",
				cancellable: true,
			}, () => {
				return new Promise(res => setTimeout(res, 3000));
			});
		})
	);
}

export function deactivate() {}
