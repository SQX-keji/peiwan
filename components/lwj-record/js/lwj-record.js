let lwjFun = {
	formatTime,
	isRepeat,
	showPrompt,
	showToast,
	deleteOneFile,
	convertLocalFileSystemURL
}
export default lwjFun;
/**
 * @param {Object} time
 * 根据传入的录音的时间，返回分秒格式的字符串mm:ss
 */
function formatTime(time) {
	// 当time为0说明还未开始录音或者因为某些原因需要重新录制
	if (time == 0) return "00:00";
	// 得到当前已经录制了几分几秒
	let m = Math.floor(time / 60);
	let s = time % 60;
	if (m < 10) m = "0" + m;
	if (s < 10) s = "0" + s;
	return m + ":" + s
}

/**
 * @param {Object} newName
 * @param {Object} arrayList
 * newName是用户输入的名字
 * arrayList是指这里的recordPathList
 * 函数功能：用于判断用户输入的名字是否之前已经输入过了
 * 因为26行的key绑定是recordPathList数组中存的每个对象的name值
 */
function isRepeat(newName, arrayList) {
	for (let index in arrayList) {
		if (arrayList[index].name == newName) {
			return true;
		}
	}
}
/**
 * native ui 输入对话框
 * @param {String} message 显示输入的内容提示 
 * @param {String} title 输入对话框上显示的标题 
 */
function showPrompt(message, title) {
	return new Promise(resolve => {
		plus.nativeUI.prompt(message, function(e) {
			resolve(e)
		}, title, "", ["确定", "取消"]);
	})
}
/**
 * 提示框方法
 * @param {String} title 提示框内容信息
 * @param {String} position 提示框的位置
 */
function showToast(title, position = "bottom") {
	uni.showToast({
		mask: true,
		title: title,
		position: position,
		duration: 2000
	})
}
/**
 * @param {Object} path
 * 删除一个文件，path是文件路径
 */
function deleteOneFile(path) {
	uni.removeSavedFile({
		filePath: path,
		success: function(res) {
			console.log("deleteOneFile success");
		},
		fail: function(err) {
			console.log("deleteOneFile fail")
			console.log(err)
		}
	})
}
/**
 * 将本地URL路径转换成平台绝对路径
 * @param {String} url
 */
function convertLocalFileSystemURL(url) {
	return plus.io.convertLocalFileSystemURL(url);
}