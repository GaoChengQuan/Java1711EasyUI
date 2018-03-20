$(function() {
	$("#panelId").panel({
		title : "我的Panel",
		iconCls : "icon-add",
		collapsible : true,
		minimizable : true,
		maximizable : true,
		href : "content.html",
		loadingMessage : "正在加载....",
		onCollapse : function() {
			console.log("折叠事件");
		},
		onExpand : function() {
			console.log("展开事件");
		}
	});
});

function collapsePanel() {
	$("#panelId").panel("collapse");
}

function expandPanel() {
	$("#panelId").panel("expand");
}
